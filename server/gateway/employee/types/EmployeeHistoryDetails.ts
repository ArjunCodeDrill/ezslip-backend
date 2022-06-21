import { GraphQLObjectType,GraphQLNonNull,GraphQLString} from 'graphql';
import { GraphQLDate } from 'graphql-scalars';

const EmployeeHistory = new GraphQLObjectType({
    name : 'Employee_History_Details',
    description : 'History details of employee',
    fields: () => ({
        firstName : { type: new GraphQLNonNull(GraphQLString)},
        lastName : { type: new GraphQLNonNull(GraphQLString)},
        employeeCode: { type: new GraphQLNonNull(GraphQLString)},
        slipShared : { type: GraphQLDate},
        updatedAt :{ type: new GraphQLNonNull(GraphQLDate)},

    })
})

export default EmployeeHistory