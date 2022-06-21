import ContactEmail from '@email/contactEmail';
import { ContactArgsType,ContactType } from '../types';

const Contact = async(_source: unknown,args: ContactArgsType ): Promise<ContactType> => { 
    const user = {
    name : args.input.name,
    organizationName : args.input.organizationName,
    email : args.input.email,
    contactNumber : args.input.contactNumber,
    details : args.input.details
    }
    const email = await ContactEmail(user)
    return email
}

export default Contact