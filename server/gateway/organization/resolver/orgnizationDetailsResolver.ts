import Organization from "@database/model/organizationDetails";
import User from "@database/model/user";
import { OrganizationDetailsType } from "../types";

const OrganizationDetails = async(_source: unknown,args: any,context : any):Promise<OrganizationDetailsType> => {
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
        const user = await User.findById(id);
        const organization = await Organization.findOne({ user: id });
        return {
            organizationImage: user.organizationImage,
            organizationLegalName: user.organizationLegalName,
            organizationType: user.organizationType,
            address: user.address,
            basicSalary: organization.basicSalary,
            HRA: organization.HRA,
            CIN: organization.CIN,
            EPF: organization.EPF,
            ESI: organization.ESI,
        }
    }
}

export default OrganizationDetails