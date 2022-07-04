import Employee from "@database/model/employee";
import { EmployeeType } from "../types";

const GetEmployee = async (
  _source: unknown,
  args: { name : string },
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
      const empName = args.name;
      var name = empName.split(" ");
      const firstName = name[0];
      const lastName = name[1]
      const employeeInfo = await Employee.findOne({firstName:firstName,lastName:lastName});
      return employeeInfo;
    } catch (error) {
      return {
        message: `Error occured! : ${error}`,
      };
    }
  }
};

export default GetEmployee;
