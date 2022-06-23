import  { GraphQLObjectType,GraphQLID,GraphQLString} from 'graphql';

const ForgetPasswordType = new GraphQLObjectType({
    name: "Forget_Password",
    description: "Recover Password",
    fields: () => ({
        id : { type: GraphQLID},
        email : { type: GraphQLString},
        message: { type: GraphQLString}
    })
})

export default ForgetPasswordType

