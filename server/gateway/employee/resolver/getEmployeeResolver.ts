import Employee from "@database/model/employee";
import { GetEmployeeType } from "../types";

const GetEmployee = async (
  _source: unknown,
  args: { id : any },
  context: any
): Promise<GetEmployeeType> => {
  if (!context.user) {
    return {
      message: context.msg,
    };
  } else if (context.user.error) {
    return {
      message: context.user.msg,
    };
  } else {
    try {
      const id = args.id;
      const employeeInfo = await Employee.findById(id);
      return employeeInfo;
    } catch (error) {
      return {
        message: `Error occured! : ${error}`,
      };
    }
  }
};

export default GetEmployee;
