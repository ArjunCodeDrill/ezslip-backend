import { GraphQLObjectType,GraphQLNonNull,GraphQLString} from 'graphql';

const EmployeeType = new GraphQLObjectType({
    name  : 'Employee_Type',
    description : 'Details of an employee using name',
    fields: () => ({
        employeeCode : { type: GraphQLString},
        designation: { type: GraphQLString},
        panNumber : { type: GraphQLString},
        dob : { type: GraphQLString},
        salary : { type: GraphQLString},
        message : { type: GraphQLString},
    })
})

export default EmployeeType