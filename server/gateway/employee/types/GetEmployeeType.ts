import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { GraphQLDate } from "graphql-scalars";

const GetEmployeeType = new GraphQLObjectType({
  name: "Employee_Details_using_employeeCode",
  description: "Details of an employee using employeeCode",
  fields: () => ({
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    employeeCode: { type: new GraphQLNonNull(GraphQLString) },
    designation: { type: new GraphQLNonNull(GraphQLString) },
    panNumber: { type: new GraphQLNonNull(GraphQLString) },
    salary: { type: new GraphQLNonNull(GraphQLString) },
    doj: { type: new GraphQLNonNull(GraphQLDate) },
    basicSalary: { type: new GraphQLNonNull(GraphQLString)},
    HRA: { type:GraphQLString},
    CIN: { type: GraphQLString},
    EPF: { type: GraphQLString},
    ESI: { type: GraphQLString},
  }),
});

export default GetEmployeeType;