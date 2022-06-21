import { GraphQLObjectType,GraphQLNonNull,GraphQLString} from 'graphql';

const UpdateType = new GraphQLObjectType({
    name : 'update_employee',
    description : 'Update employee',
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default UpdateType