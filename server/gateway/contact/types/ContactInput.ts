import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString } from 'graphql'

const ContactInput = new GraphQLInputObjectType({
    name : 'ContactInput',
    fields: () => ({
        name : { type: new GraphQLNonNull(GraphQLString)},
        organizationName: { type: new GraphQLNonNull(GraphQLString)},
        email : { type: new GraphQLNonNull(GraphQLString)},
        contactNumber : { type: new GraphQLNonNull(GraphQLString)},
        details : { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default ContactInput