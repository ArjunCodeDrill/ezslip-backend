import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { GraphQLDate } from "graphql-scalars";
import EPFType from "./EPFType";
import ESIType from "./ESIType";

const EmployeeType = new GraphQLObjectType({
  name: "Employee_Type",
  description: "Details of an employee using id",
  fields: () => ({
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    employeeCode: { type: new GraphQLNonNull(GraphQLString) },
    designation: { type: new GraphQLNonNull(GraphQLString) },
    panNumber: { type: new GraphQLNonNull(GraphQLString) },
    salary: { type: new GraphQLNonNull(GraphQLString) },
    dob: { type: new GraphQLNonNull(GraphQLDate) },
    doj: { type: new GraphQLNonNull(GraphQLDate) },
    epf: { type: new GraphQLNonNull(EPFType) },
    esi: { type: new GraphQLNonNull(ESIType) },
  }),
});

export default EmployeeType;
