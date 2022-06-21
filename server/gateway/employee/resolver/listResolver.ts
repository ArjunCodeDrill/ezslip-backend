import Employee from "@database/model/employee";
import { List } from '../types'

const EmployeeList = async(_source: unknown,args: any,context : any):Promise<List> => {
    if(!context.user){
        return {
            message : context.msg
        }
    }else if(context.user.error){
        return { 
            message : context.user.msg
        }
    }else{
        const id = context.user.id
        const employeeList = await Employee.find({userId: id,employeeStatus:true})
        return {
            employees : employeeList
        }
    }
}

export default EmployeeList