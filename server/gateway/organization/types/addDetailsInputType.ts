import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString } from 'graphql';

const AddDetailsInput = new GraphQLInputObjectType({
   name: 'AddOrganizationInput',
   fields: () => ({
    organizationImage: { type:new GraphQLNonNull(GraphQLString)},
    organizationLegalName: { type:new GraphQLNonNull(GraphQLString)},
    organizationType: { type: new GraphQLNonNull(GraphQLString)},
    address: { type: new GraphQLNonNull(GraphQLString)},
    basicSalary: { type: new GraphQLNonNull(GraphQLString)},
    HRA: { type:new GraphQLNonNull(GraphQLString)},
    CIN: { type: new GraphQLNonNull(GraphQLString)},
    EPF: { type: new GraphQLNonNull(GraphQLString)},
    ESI: { type: new GraphQLNonNull(GraphQLString)},
   })
})

export default AddDetailsInput