import { GraphQLObjectType,GraphQLNonNull,GraphQLString} from 'graphql';

const ContactType = new GraphQLObjectType({
    name: "Contact",
    description: "Any user contact to admin",
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default ContactType