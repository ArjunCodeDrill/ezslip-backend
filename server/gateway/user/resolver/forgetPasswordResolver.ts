import User from '@database/model/user';
import CryptoJS from "crypto-js";
import forgetPasswordEmail from '@email/forgetPasswordEmail';
import { ForgetPasswordType } from '../types'

const encrypt_key : string = (process.env.ENCRYPT_KEY as string);

export default async(_source: unknown,args : { email : string}):Promise<ForgetPasswordType> => {
    const email = args.email;
    const user = await User.findOne({email});

    if(!user){
        return {
            message : 'User with email address does not exits'
        }
    }
    try{
        const id = user._id.toString();
        const hashId = CryptoJS.AES.encrypt(id, encrypt_key).toString();
        const expireTime = new Date().getTime() + (15 * 60 * 1000);
        const token   = hashId + "_" + expireTime;
        const emailSend = await forgetPasswordEmail(user.email,token)
        return {
            id : user._id,
            email : user.email,
            message : emailSend
        }
    }catch(error){
        return{
            message  : `Error occured : ${error}`
        }
    }

}