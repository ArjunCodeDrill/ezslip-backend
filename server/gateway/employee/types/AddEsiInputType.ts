import { GraphQLInputObjectType,GraphQLString,GraphQLBoolean} from 'graphql';

const ESIInputType = new GraphQLInputObjectType({
    name : 'ESI_Type',
    description : 'Employee ESI',
    fields: () => ({
        isEnabled : { type: GraphQLBoolean},
        number : { type: GraphQLString}
    })
})

export default ESIInputType