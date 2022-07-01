import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLID} from 'graphql';

const EmployeeList = new GraphQLObjectType({
    name : 'Get_Details',
    description : 'Get all employees with specific usedId',
    fields: () => ({
        id : { type:new GraphQLNonNull(GraphQLID)},
        firstName : { type: new GraphQLNonNull(GraphQLString)},
        lastName : { type: new GraphQLNonNull(GraphQLString)},
        employeeCode: { type: new GraphQLNonNull(GraphQLString)},
        designation : { type: new GraphQLNonNull(GraphQLString)},
        salary : { type: new GraphQLNonNull(GraphQLString)},
    })
})

export default EmployeeList