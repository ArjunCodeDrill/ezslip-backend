import { GraphQLInputObjectType,GraphQLString,GraphQLBoolean} from 'graphql';

const EPFInputType = new GraphQLInputObjectType({
    name : 'EPF_Type',
    description : 'Employee EPF',
    fields: () => ({
        isEnabled : { type: GraphQLBoolean},
        number : { type: GraphQLString}
    })
})

export default EPFInputType