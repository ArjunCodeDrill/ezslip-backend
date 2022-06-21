import slipShared from "@database/model/slipShared";
import { EmployeeIdType, EmployeeType } from '../types'
import {ObjectId} from 'mongodb';

const object = new ObjectId();
const timestamp = object.getTimestamp();

const SlipShared = async(_source:unknown,args:EmployeeIdType,context:any):Promise<EmployeeType> => {
    if(!context.user){
        return{
            message : context.msg
        }
    }else if(context.user.error){
        return { 
            message : context.user.msg
        }
    }else{
        const slipshared = new slipShared({
            user :context.user.id,
            employee : args.id,
            date : timestamp
        })
        await slipshared.save();
        return {
            message :  'Employee slip shared' 
        }
    }
}

export default SlipShared