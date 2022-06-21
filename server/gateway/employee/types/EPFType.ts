import { GraphQLInputObjectType,GraphQLString,GraphQLBoolean} from 'graphql';

const EPFType = new GraphQLInputObjectType({
    name : 'EPF_Details',
    description : 'Employee EPF_Detalils',
    fields: () => ({
        isEnabled : { type: GraphQLBoolean},
        number : { type: GraphQLString}
    })
})

export default EPFType