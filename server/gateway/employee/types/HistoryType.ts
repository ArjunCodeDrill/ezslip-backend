import { GraphQLObjectType,GraphQLString,GraphQLList} from 'graphql';
import EmployeeHistory  from './EmployeeHistoryDetails';

const HistoryType = new GraphQLObjectType({
    name : 'Employee_History',
    description : 'History of employee',
    fields: () => ({
        employees : { type: new GraphQLList(EmployeeHistory) },
        message : { type: GraphQLString } 
    })
})

export default HistoryType