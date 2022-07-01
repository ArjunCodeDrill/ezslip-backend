import { GraphQLObjectType,GraphQLString,GraphQLBoolean} from 'graphql';

const ESIType = new GraphQLObjectType({
    name : 'Esi_Info',
    description : 'Employee Esi_info',
    fields: () => ({
        isEnabled : { type: GraphQLBoolean},
        number : { type: GraphQLString}
    })
})

export default ESIType