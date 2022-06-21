import Employee from "@database/model/employee";
import { GetEmployeeType } from '../types'

const GetEmployee = async(_source: unknown,args : {name : string},context : any) :Promise<GetEmployeeType> => {
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
            const name = args.name;
            var words = name.split(" ");
            var firstName = words[0];
            var lastName = words[1];
            const { employeeCode,designation,panNumber,dob,salary } = await Employee.findOne({firstName : firstName,lastName : lastName,employeeStatus:true})
            return {
                employeeCode : employeeCode,
                designation : designation,
                panNumber : panNumber,
                dob : dob,
                salary : salary,
            }
        }catch(error){
            return {
                message : `Error occured! : ${error}`
            }
        }
    }
}

export default GetEmployee