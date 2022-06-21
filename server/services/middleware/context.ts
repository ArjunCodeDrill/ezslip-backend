import { Request,Response,NextFunction } from 'express'
import jwt from 'jsonwebtoken';
import User from "@database/model/user";

const jwt_key : string = (process.env.JWT_SECRET as string);
interface JwtPayload {
    id: string
  }

const  context = async(req: Request | any,res: Response,next: NextFunction) => {
    const token =  req.headers.authorization;
  
    //check json web token exits and its verified
    if(!token) return res.status(403).send('A token is required for authentication')
    try{
        const { id } = jwt.verify(token,jwt_key) as JwtPayload; 
    
    req.user = await User.findOne({ _id : id})
    }catch(error){
        res.status(401).send('Invalid token')
    }
    return next();
}

export default context