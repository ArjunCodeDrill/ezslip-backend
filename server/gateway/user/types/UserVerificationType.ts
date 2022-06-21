import { GraphQLObjectType,GraphQLString,GraphQLNonNull,GraphQLID} from 'graphql';

const UserVerificationType = new GraphQLObjectType({
    name: "Verification",
    description: "User Verification",
    fields: () => ({
        id: { type: GraphQLID},
        message: { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default UserVerificationType;