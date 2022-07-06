import Employee from "@database/model/employee";
import { EmployeeNameListType } from "../types"

const EmployeeNameList = async(_source : unknown,args:{ name : string },context : any):Promise<EmployeeNameListType> => {
    if(!context.user){
        return{
            message : context.msg
        }
    }else if(context.user.error){
        return { message : context.user.msg}
    }else{
        try{
            const id = context.user.id;
            const empName = args.name;
            if(empName){                                                                                                                                                                                      
                const employeeList = await Employee.find({"firstName": {$regex: '^' + empName, $options: 'i'}}).skip(0).limit(10)
                const nameList = await Promise.all(
                employeeList.map(async(employee) => {
                    const employeeName = {
                        id : employee._id,
                        name : employee.firstName + " " + employee.lastName
                    }
                    return employeeName                                                                              
                }))
                return {                                                                             
                    employees : nameList
                }
            }
            const employeeList = await Employee.find({userId: id,employeeStatus:true}).skip(0).limit(10)
            const nameList = await Promise.all(
            employeeList.map(async(employee) => {
                const employeeName = {
                    id : employee._id,
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