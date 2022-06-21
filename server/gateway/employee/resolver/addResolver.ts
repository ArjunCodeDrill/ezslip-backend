import Employee from "@database/model/employee";
import { AddEmployeeArgsType, EmployeeType } from '../types'

const AddEmployee = async(_source: unknown,args: AddEmployeeArgsType, context : any): Promise<EmployeeType> => {
    if(!context.user) return { message : 'User must be logged In!'}
    const id = context.user.id
    if(context.message){
        return{
            message : context.message
        }
    }else if(context.user.error){
        return { message : context.user.message}
    }else{
        try{
            const employee = new Employee({
                userId : id,
                firstName : args.input.firstName,
                lastName : args.input.lastName,
                employeeCode : args.input.employeeCode,
                designation : args.input.designation,
                panNumber : args.input.panNumber,
                salary : args.input.salary,
                employeeStatus : true,
                dob : args.input.dob,
                //date in  apollo server is defined in yyyy-mm-dd
                doj  : args.input.doj,
                epf: {
                    isEnabled : args.input.epf.isEnabled,
                    number: args.input.epf.number
                },
                esi: {
                    isEnabled : args.input.esi.isEnabled,
                    number: args.input.esi.number
                }
            });
            await employee.save();
            return{
                message : "New Employee created"
            }
        }catch(error){
        return {
            message : `Error Occured : ${error}`
        };
        }
    }
}

export default AddEmployee