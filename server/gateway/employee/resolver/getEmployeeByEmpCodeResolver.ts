import Employee from "@database/model/employee";
import Organization from "@database/model/organizationDetails";
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
      const id = context.user.id
      const empCode = args.employeeCode;
      const employeeInfo = await Employee.findOne({employeeCode : empCode,userId : id,employeeStatus : true});
      const organizationInfo = await Organization.findOne({userId: id})
      var epf : string = '';
      var esi : string = '';
      if(employeeInfo.epf.isEnabled) {
        epf = organizationInfo.EPF
      }
      if(employeeInfo.esi.isEnabled) {
        esi = organizationInfo.ESI
      }

      return {
        firstName: employeeInfo.firstName,
        lastName: employeeInfo.lastName,
        employeeCode:employeeInfo.employeeCode ,
        designation:employeeInfo.designation,
        panNumber:employeeInfo.panNumber ,
        salary: employeeInfo.salary,
        doj:employeeInfo.doj,
        basicSalary:organizationInfo.basicSalary,
        HRA:organizationInfo.HRA,
        CIN: organizationInfo.CIN,
        EPF: epf,
        ESI: esi,
      };
    } catch (error) {
      return {
        message: `Error occured! : ${error}`,
      };
    }
  }
};

export default GetEmployee;
