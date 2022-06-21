import  { GraphQLObjectType,GraphQLID,GraphQLString} from 'graphql';

const LoginType = new GraphQLObjectType({
    name: "Login",
    description: "User Login",
    fields: () => ({
        id : { type: GraphQLID},
        name : { type: GraphQLString},
        organizationName : { type: GraphQLString},
        email : { type: GraphQLString},
        contactNumber : { type: GraphQLString},
        token: { type: GraphQLString},
        message: { type: GraphQLString}
    })
})

export default LoginType