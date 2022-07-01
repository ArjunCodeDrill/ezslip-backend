import Organization from "@database/model/organizationDetails";
import User from "@database/model/user";
import { AddOrganizationDetailsType,AddDetailsType } from "../types";

const AddOrganizationDetails = async(_source: unknown,args: AddOrganizationDetailsType,context : any):Promise<AddDetailsType> => {
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
        if (!user) return { message: "User does not exits!" };

        await User.findByIdAndUpdate(id, {  
            $set: {
              organizationImage: args.input.organizationImage,
              organizationLegalName: args.input.organizationLegalName,
              organizationType: args.input.organizationType,
              address: args.input.address,
            },
          });
          await Organization.findOneAndUpdate(
            { user: id },
            {
              $set: {
                basicSalary: args.input.basicSalary,
                HRA: args.input.HRA,
                CIN: args.input.CIN,
                EPF: args.input.EPF,
                ESI: args.input.ESI,
              },
            }
          );
          return{
            message : 'User organization Details Updated'
          }
        }
    }

export default AddOrganizationDetails