import Employee from "@database/model/employee";
import { UpdateEmployeeArgsType,EmployeeType } from '../types'

const UpdateEmployee = async(_source: unknown,args: UpdateEmployeeArgsType,context : any):Promise<EmployeeType> => {
    if(!context.user){
        return{
            message : context.msg
        }
    }else if(context.user.error){
        return { 
            message : context.user.msg
        }
    }else{
        try{
            await Employee.findByIdAndUpdate(
                {_id: args.input.id },
                {
                $set:args.input,      
                }
            );
            return{
                message : 'Employee Details Updated'
            }
        }catch(error){
            return {
                message : `Error occured : ${error}`
            };
        }
   }
}

export default UpdateEmployee