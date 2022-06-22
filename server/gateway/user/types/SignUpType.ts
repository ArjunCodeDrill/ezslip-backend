import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLID} from 'graphql';

const SignUpType = new GraphQLObjectType({
    name: "SignUp",
    description: "New user sign in",
    fields: () => ({
        id : { type: GraphQLID},
        name : { type: GraphQLString},
        organizationName : { type: GraphQLString},
        email : { type: GraphQLString},
        contactNumber : { type: GraphQLString},
        message: { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default SignUpType