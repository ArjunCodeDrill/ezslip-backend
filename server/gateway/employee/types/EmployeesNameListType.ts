import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLID} from 'graphql';

const EmployeeNameListType = new GraphQLObjectType({
    name : 'Employee_Names_List',
    description : 'List of Employees names',
    fields: () => ({
        id : { type: new GraphQLNonNull(GraphQLID)},
        name : { type: new GraphQLNonNull(GraphQLString)}
    })
})

export default EmployeeNameListType