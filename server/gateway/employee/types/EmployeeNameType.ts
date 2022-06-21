import { GraphQLObjectType,GraphQLList,GraphQLString} from 'graphql';
import EmployeeNameListType from './EmployeesNameListType'

const EmployeeNameType = new GraphQLObjectType({
    name : 'Employee_Name_Type',
    description : 'List of Employees names',
    fields: () => ({
        employees :{ type : new GraphQLList(EmployeeNameListType)} ,
        message : { type: GraphQLString}
    })
})

export default EmployeeNameType