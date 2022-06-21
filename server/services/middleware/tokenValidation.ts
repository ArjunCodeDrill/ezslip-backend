import jwt from 'jsonwebtoken'

const jwt_key : string = (process.env.JWT_SECRET as string);

const tokenValidation = async(token : string) => {
    if(token){
        try{
            const verify  = jwt.verify(token,jwt_key)
           return  verify
        }catch(err){
           return {
               error : true,
               msg : 'Token Invalid'
           }
        }
    }
}

export default tokenValidation;