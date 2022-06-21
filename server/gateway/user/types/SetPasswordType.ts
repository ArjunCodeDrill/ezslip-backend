import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLID} from 'graphql';

const SetPasswordType = new GraphQLObjectType({
    name: "Set_Password",
    description: "Set password",
    fields: () => ({
        id : { type: GraphQLID},
        name : { type: GraphQLString},
        organizationName : { type: GraphQLString},
        email : { type: GraphQLString},
        contactNumber : { type: GraphQLString},
        token: { type: GraphQLString},
        message: { type: GraphQLString},
    })
})

export default SetPasswordType