import User from '@database/model/user';
import CryptoJS from "crypto-js";
import { UserVerificationType } from '../types'

const encrypt_key : string = (process.env.ENCRYPT_KEY as string);

export default async(_source : unknown,args : {verificationId:string} ) : Promise<UserVerificationType> => {
    const verification_id = args.verificationId;
    //Split the string into an array
    var splitString = verification_id.split('_');
    
    const hashId = splitString[0];
    const expireTime =  splitString[1]
    console.log(expireTime)
    const currentTime = new Date().getTime()
     
    // Decrypt
    const bytes  = CryptoJS.AES.decrypt(hashId,encrypt_key);
    const id = bytes.toString(CryptoJS.enc.Utf8);
    
    const user = await User.findById(id)
    if(!user)return { message : 'User does not exits'}
    if(parseInt(expireTime) > currentTime){
        await User.findByIdAndUpdate({_id : id}, { $set : { isVerified : true}})
        return {
            id : user._id,
            message : "User verified"
        }
    }else{
        return {
            message : "User verification time expired"
        }
    }
}