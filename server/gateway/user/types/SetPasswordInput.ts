import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString,GraphQLID } from 'graphql'

const SetPasswordInput = new GraphQLInputObjectType({
    name : 'SetPasswordInput',
    fields: () => ({
        id : { type: new GraphQLNonNull(GraphQLID)},
        password : { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default SetPasswordInput