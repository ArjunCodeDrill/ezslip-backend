import { GraphQLObjectType,GraphQLNonNull,GraphQLString } from 'graphql';

const SlipSharedType = new GraphQLObjectType({
    name : 'Slip_Shared',
    description : 'Employee slip shared',
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default SlipSharedType