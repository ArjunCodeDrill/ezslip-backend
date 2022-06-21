import { GraphQLObjectType,GraphQLString,GraphQLList} from 'graphql';
import EmployeeList from './EmployeeListDetails'

const ListType = new GraphQLObjectType({
    name : 'List_Type',
    description : 'Return EmployeeList Type',
    fields: () => ({
        employees : { type: new GraphQLList(EmployeeList) },
        message : { type: GraphQLString } 
    })
})

export default ListType