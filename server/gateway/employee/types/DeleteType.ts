import { GraphQLObjectType,GraphQLNonNull,GraphQLString } from 'graphql';

const DeleteType = new GraphQLObjectType({
    name : 'employee',
    description : 'Delete employee',
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default DeleteType