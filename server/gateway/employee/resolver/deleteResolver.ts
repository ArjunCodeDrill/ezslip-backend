import Employee from "@database/model/employee";
import { EmployeeIdType,EmployeeType } from '../types'

const DeleteEmployee = async(_source: unknown,args :EmployeeIdType,context: any):Promise<EmployeeType> => {
    if(!context.user){
        return{
            message : context.msg
        }
    }else if(context.user.error){
        return { message : context.user.msg}
    }else{
        try{
            const id = args.id
            await Employee.findByIdAndUpdate(
                {_id: id },
                {
                  $set:{
                      employeeStatus : false
                  }
                }
            );
            return{
                message : 'Employee deleted'
            }
        }catch(error){
            return {
                message : `Error Occured : ${error}`
            }
        }
        
    }  
}

export default DeleteEmployee