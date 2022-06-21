import { GraphQLObjectType,GraphQLNonNull,GraphQLString} from 'graphql';

const EmployeeNameListType = new GraphQLObjectType({
    name : 'Employee_Names_List',
    description : 'List of Employees names',
    fields: () => ({
        name : { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default EmployeeNameListType