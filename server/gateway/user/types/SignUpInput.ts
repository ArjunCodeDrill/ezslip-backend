import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString } from 'graphql'

const SignUpInput = new GraphQLInputObjectType({
    name : "SignUpInput",
    fields: () => ({
        name : { type: new GraphQLNonNull(GraphQLString)},
        organizationName: { type: new GraphQLNonNull(GraphQLString)},
        email : { type: new GraphQLNonNull(GraphQLString)},
        contactNumber: { type:new GraphQLNonNull(GraphQLString)}
    })
})

export default SignUpInput