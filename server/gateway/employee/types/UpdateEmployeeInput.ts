import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString,GraphQLID } from 'graphql';
import { GraphQLDate } from 'graphql-scalars';
import EPFType from './AddEpfInputType';
import ESIType from './AddEsiInputType';

const UpdateEmployeeInput = new GraphQLInputObjectType({
   name: 'UpdateEmployeeInput',
   fields: () => ({
    id : { type: new GraphQLNonNull(GraphQLID)},
    firstName:{ type: GraphQLString },
    lastName: { type: GraphQLString },
    employeeCode : { type: GraphQLString },
    designation:{ type: GraphQLString },
    panNumber:{ type: GraphQLString },
    salary: { type: GraphQLString },
    dob : { type : GraphQLDate},
    doj : { type : GraphQLDate},
    epf : { type: EPFType},
    esi : { type: ESIType}
   })
})

export default UpdateEmployeeInput