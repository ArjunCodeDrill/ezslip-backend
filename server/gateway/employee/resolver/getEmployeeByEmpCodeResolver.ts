import Employee from "@database/model/employee";
import { EmployeeType } from "../types";

const GetEmployee = async (
  _source: unknown,
  args: { employeeCode : string },
  context: any
): Promise<EmployeeType> => {
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
      const empCode = args.employeeCode;
      const employeeInfo = await Employee.findOne({"employeeCode" : empCode});
      return employeeInfo;
    } catch (error) {
      return {
        message: `Error occured! : ${error}`,
      };
    }
  }
};

export default GetEmployee;
