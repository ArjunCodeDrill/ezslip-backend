import User from '@database/model/user';
import { GetUserArgType,GetUserType  } from '../types';

export default async(_source: unknown ,args : GetUserArgType) : Promise<GetUserType>  => {
    const user = await User.findById(args.id)
    return {
        name : user.name,
        organizationName : user.organizationName,
        email : user.email,
        contactNumber : user.contactNumber,
    }
}