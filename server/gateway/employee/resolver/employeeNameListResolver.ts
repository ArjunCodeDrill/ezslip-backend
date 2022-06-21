import Employee from "@database/model/employee";
import { EmployeeNameListType } from "../types"

const EmployeeNameList = async(_source : unknown,args:any,context : any):Promise<EmployeeNameListType> => {
    if(!context.user){
        return{
            message : context.msg
        }
    }else if(context.user.error){
        return { message : context.user.msg}
    }else{
        try{
           const id = context.user.id;
           const employeeList = await Employee.find({userId: id,employeeStatus:true})
           const nameList = await Promise.all(
            employeeList.map(async(employee) => {
                const employeeName = {
                    name : employee.firstName + " " + employee.lastName
                }
                return employeeName
            }))
            return {
                employees : nameList
            }
        }catch(error){
            return{
                message  : `Error occured : ${error}`
            }
        }
    }
}

export default EmployeeNameList