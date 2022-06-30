import Employee from "@database/model/employee";
import SlipShared from "@database/model/slipShared"
import { History } from '../types'

const EmployeeHistory = async(_source:unknown,args : any,context : any):Promise<History> => {
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
        const employeeHistory = await Employee.find({userId: id,employeeStatus:true})
        const employeeList = await Promise.all(
            employeeHistory.map(async(employee) => {
                const arrayofDates = await SlipShared.find({employee : employee._id})
                const sorted_ms = arrayofDates.map(function(slipshared) {
                    return new Date(slipshared.date).getTime()
                 }).sort(); 
                 var slipshared = new Date(sorted_ms[sorted_ms.length-1]);
                 var shared; 
                 if (Object.prototype.toString.call(slipshared) === "[object Date]")
                {
                    if (isNaN(slipshared.getTime())) { 
                        
                    }
                    else {
                        shared = slipshared;
                    }
                }
                const Employee  = {
                    firstName : employee.firstName,
                    lastName : employee.lastName,
                    employeeCode : employee.employeeCode,
                    slipShared : shared,
                    updatedAt : employee.updatedAt,
                }
                return Employee
            }))
        return {
            employees : employeeList   
        }
    }
}

export default EmployeeHistory