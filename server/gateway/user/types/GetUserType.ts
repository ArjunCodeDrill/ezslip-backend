import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLInt} from 'graphql';

const GetUserType = new GraphQLObjectType({
    name: "User",
    description: "Get user",
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString)},
        organizationName: { type:new GraphQLNonNull(GraphQLString)},
        email: { type: new GraphQLNonNull(GraphQLString)},
        contactNumber: { type: new GraphQLNonNull(GraphQLInt)}
    })
})

export default GetUserType;