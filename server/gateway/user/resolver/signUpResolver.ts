import User from '@database/model/user';
import CryptoJS from "crypto-js";
import { SignUpArgsType,SignUpType  } from '../types';
import sendSignUpEmail from '@email/sendSignUpEmail';
import emailValidation from '../error/emailValidation';

const encrypt_key : string = (process.env.ENCRYPT_KEY as string);

export default async(_source: unknown, args : SignUpArgsType ): Promise<SignUpType> => {
    const input = args.input;
    const newUser =  new User({
        name : input.name,
        organizationName : input.organizationName,
        email: input.email,
        contactNumber : input.contactNumber
    })
    const data = await User.findOne({ email: input.email });

    if(data && !data.isVerified && !data.isActivated){
        const id = data._id.toString();
        const hashId = CryptoJS.AES.encrypt(id, encrypt_key).toString();
        console.log(hashId)
        const expireTime = new Date().getTime() + (15 * 60 * 1000);
        const token   = hashId + "_" + expireTime;
        const emailSend = await sendSignUpEmail(data.email,token)
        return {
            name : data.name,
            organizationName : data.organizationName,
            email : data.email,
            contactNumber : data.contactNumber,
            message : emailSend
        }
    }else if(data && data.isActivated){
        return {
             message : 'User already exits!. Please redirect to login page'
            }
    }else if (data && data.isVerified && !data.isActivated){
        return { 
            message : 'User already exits! Please redirect to set-password page'
        }
    }
    else{
        try{
            const validationResponse = await emailValidation(input.email)
            if(validationResponse === true){
                const user = await newUser.save();
                const id = user._id.toString();
                const hashId = CryptoJS.AES.encrypt(id, encrypt_key).toString();
                console.log(hashId)
                const expireTime = new Date().getTime() + (15 * 60 * 1000);
                const token = hashId + "_" + expireTime;
                const emailSend = await sendSignUpEmail(user.email,token)
                return {
                    name : user.name,
                    organizationName : user.organizationName,
                    email : user.email,
                    contactNumber : user.contactNumber,
                    message : emailSend
                }
            }
            else{
                return{ message : 'Invalid Email address' }
            }  
        }catch(error : any){
            throw new Error(error);
        }
    }  
}

