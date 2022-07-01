import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString } from 'graphql';
import { GraphQLDate } from 'graphql-scalars';
import EPFInputType  from './AddEpfInputType';
import ESIInputType  from './AddEsiInputType';

const AddEmployeeInput = new GraphQLInputObjectType({
   name: 'AddEmployeeInput',
   fields: () => ({
      firstName: { type: new GraphQLNonNull(GraphQLString)},
      lastName: { type: new GraphQLNonNull(GraphQLString)},
      employeeCode : { type: new GraphQLNonNull(GraphQLString)},
      designation: { type:new GraphQLNonNull(GraphQLString)},
      panNumber: { type: new GraphQLNonNull(GraphQLString)},
      salary: { type: new GraphQLNonNull(GraphQLString)},
      dob : { type : new GraphQLNonNull(GraphQLDate)},
      doj : { type : new GraphQLNonNull(GraphQLDate)},
      epf : { type: new GraphQLNonNull(EPFInputType)},
      esi : { type: new GraphQLNonNull(ESIInputType)}
   })
})

export default AddEmployeeInput