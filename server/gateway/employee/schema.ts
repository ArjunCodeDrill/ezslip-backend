import { GraphQLNonNull,GraphQLID,GraphQLString} from 'graphql';

import AddType from './types/AddEmployeeType';
import UpdateType from './types/UpdateType';
import DeleteType from './types/DeleteType';
import ListType from './types/ListType';
import HistoryType  from './types/HistoryType';
import SlipSharedType from './types/SlipSharedType';
import AddEmployeeInput from './types/AddEmployeeInput';
import UpdateEmployeeInput from './types/UpdateEmployeeInput'
import EmployeeType from './types/EmployeeType';
import EmployeeNameType from './types/EmployeeNameType'
import GetEmployeeType from './types/GetEmployeeType'

import AddEmployee from './resolver/addResolver';
import UpdateEmployee from './resolver/updateResolver';
import DeleteEmployee from './resolver/deleteResolver';
import EmployeeList from './resolver/listResolver';
import EmployeeHistory from './resolver/historyResolver';
import SlipShared from './resolver/slipShared';
import GetEmployee from './resolver/getEmployeeResolver'
import EmployeeNameList from './resolver/employeeNameListResolver'
import Employee from "./resolver/getEmployeeByEmpCodeResolver"
import GetEmployeeByName from "./resolver/getEmployeeByNameResolver"

export const employeeQuery = {
    employeeList : {
        type : ListType,
        description : 'List of all employee with specific userId',
        resolve : EmployeeList
    },
    employeeHistory : {
        type : HistoryType,
        description : 'Employee History List',
        resolve : EmployeeHistory
    },
    employeeNameList : {
        type : EmployeeNameType,
        description : 'List of employees names',
        resolve : EmployeeNameList
    },
    getEmployeeById : {
        type : EmployeeType,
        description : 'Get employee with specific id',
        args : {
            id: { type: new GraphQLNonNull(GraphQLID)},
        },
        resolve : GetEmployee,
    },
    getEmployeeByEmpCode : {
        type : GetEmployeeType,
        description : 'Get employee with specific employeeCode',
        args : {
            employeeCode: { type: new GraphQLNonNull(GraphQLString)},
        },
        resolve : Employee,
    },
    getEmployeeByName : {
        type : GetEmployeeType,
        description : 'Get employee with specific employee name',
        args : {
            name: { type: new GraphQLNonNull(GraphQLString)},
        },
        resolve : GetEmployeeByName,
    }
}

export const employeeMutation = {
    addEmployee : {
        type: AddType,
        description: "New user employee created",
        args: {
            input: {
              type: new GraphQLNonNull(AddEmployeeInput),
            },
          },
        resolve : AddEmployee
    },
    updateEmployee : {
        type: UpdateType,
        description: "User employee updated",
        args : {
            input: {
                type: new GraphQLNonNull(UpdateEmployeeInput),
              },
        },
        resolve : UpdateEmployee
    },
    deleteEmployee : {
        type: DeleteType,
        description: "User employee deleted",
        args : {
            id: { type: new GraphQLNonNull(GraphQLID)},
        },
        resolve : DeleteEmployee
    },
    employeeSlipShared : {
        type : SlipSharedType,
        description: "Employee Slip Shared",
        args : {
            id : { type: new GraphQLNonNull(GraphQLID)}
        },
        resolve : SlipShared
    }
}