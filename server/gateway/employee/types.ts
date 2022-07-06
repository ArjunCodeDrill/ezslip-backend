import { Types as MongooseTypes } from 'mongoose';

export type EPFType = {
    isEnabled : boolean,
    number : string,
}

export type ESIType = {
    isEnabled : boolean,
    number : string,
}

export type AddEmployeeArgsType = {
    input :{
        firstName : string,
        lastName : string,
        employeeCode : string,
        designation : string,
        panNumber : string,
        salary : string,
        dob: Date,
        doj : Date,
        epf: EPFType,
        esi : ESIType
    }
}

export type UpdateEmployeeArgsType = {
    input :{
        id : MongooseTypes.ObjectId,
        firstName?: string,
        lastName?: string,
        employeeCode?: string,
        designation?: string,
        panNumber?: string,
        salary?: string,
        dob?: Date,
        doj?: Date,
        epf?: EPFType ,
        esi?: ESIType,
    }
}

export type EmployeeIdType = {
   id : MongooseTypes.ObjectId
}

export type ListType = {
    id :  MongooseTypes.ObjectId,
    firstName : string,
    lastName : string,
    employeeCode : string,
    designation : string,
    salary : string
}

export type List = {
    employees?: ListType[],
    message?: string,
}

export type HistoryType = {
    firstName : string,
    lastName : string, 
    employeeCode : string,
    slipShared? : Date | undefined,
    updatedAt : Date | undefined
}

export type History = {
    employees? : HistoryType[],
    message?: string
}

export type EmployeeNames = {
    id :  MongooseTypes.ObjectId,
    name : string
}

export type EmployeeNameListType = {
    employees?: EmployeeNames[],
    message?: string
}

export type GetEmployeeType = {
    firstName?: string,
    lastName?: string,
    employeeCode?: string,
    designation?: string,
    panNumber?: string,
    salary?: string,
    dob?: Date,
    doj?: Date,
    epf?: EPFType ,
    esi?: ESIType,
    message?: string
}

export type EmployeeType = {
    firstName?: string,
    lastName?: string,
    employeeCode?: string,
    designation?: string,
    panNumber?: string,
    salary?: string,
    doj?: Date,
    message?: string,
    basicSalary?: string,
    HRA?: string,
    CIN?: string,
    EPF?: string,
    ESI?: string,
}

