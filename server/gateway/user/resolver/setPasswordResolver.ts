import User from '@database/model/user';
import passwordValidation from '../error/passwordValidation';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { SetPasswordArgsType, UserInfoType } from '../types'

const jwt_key : string = (process.env.JWT_SECRET as string);

export default async(_source: unknown,args : SetPasswordArgsType) : Promise<UserInfoType> => {
    const password = args.input.password;
    const validationResponse = await passwordValidation(password)
  
    if(validationResponse === true){
      try{      
        const user = await User.findById(args.input.id)
        if(!user.isVerified) return { message : "User not verified" }
        if(user){
          //hash password        
          const hashPassword = await bcrypt.hash(password,10);
          await User.findByIdAndUpdate(
            {_id: args.input.id },
            {
              $set:{
                  password : hashPassword,
                  isActivated : true
              },
            }
          );
          const token =  jwt.sign({ id : user._id},jwt_key,{  expiresIn: "1d"});
        return {
          id : user._id,
          name: user.name,
          organizationName : user.organizationName,
          email : user.email,
          contactNumber : user.contactNumber,
          token: token,
        }          
        }
        else{
          return{
            message : "User does not exits!"
          }
        }        
      }
      catch (error : any) {
        throw new Error(error);
      }
    }else{
      return{
        message : "The password must be at least 8 characters including one uppercase, one lowercase, one number and a special character"
      }
    }   
}
