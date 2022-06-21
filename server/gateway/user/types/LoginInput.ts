import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString } from 'graphql';

const LoginInput = new GraphQLInputObjectType({
    name : 'LoginInput',
    fields: () => ({
        email : { type: new GraphQLNonNull(GraphQLString)},
        password: { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default LoginInput