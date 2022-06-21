import { GraphQLNonNull} from 'graphql';
import ContactType  from './types/ContactType';
import ContactInput from './types/ContactInput';
import Contact from './resolver/contact'

export const contactQuery = {}

export const contactMutation = {
    contact : {
        type : ContactType,
        description : 'Any user contact to admin',
        args : {
           input : {
               type : new GraphQLNonNull(ContactInput)
           }
        },
        resolve : Contact
    }
}