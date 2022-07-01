import { GraphQLObjectType,GraphQLString,GraphQLBoolean} from 'graphql';

const ESIType = new GraphQLObjectType({
    name : 'Epf',
    description : 'Employee Epf_Detalils',
    fields: () => ({
        isEnabled : { type: GraphQLBoolean},
        number : { type: GraphQLString}
    })
})

export default ESIType