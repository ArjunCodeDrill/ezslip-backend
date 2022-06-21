import User from '@database/model/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { LoginArgsType,UserInfoType } from "../types";

const jwt_key : string = (process.env.JWT_SECRET as string);

export default async(_source: unknown,args : LoginArgsType):Promise<UserInfoType> => {
    const email = args.input.email;
    const password = args.input.password;

    const user = await User.findOne({email});
    if(!user){
        return {
            message : 'User with email address does not exits'
        }
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword) {
        return { 
            message : 'Password is incorrect'
        }
    }
    const token =  jwt.sign({id : user._id},jwt_key,{   expiresIn: '1d' });
    return {
        id : user._id,
        name: user.name,
        organizationName : user.organizationName,
        email : user.email,
        contactNumber : user.contactNumber,
        token : token,
        message : 'User logged in successfully!'
    }
}