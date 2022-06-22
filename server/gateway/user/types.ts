import { Types as MongooseTypes } from 'mongoose';

export type SignUpArgsType = {
  input: {
    name: string;
    organizationName: string;
    email: string;
    contactNumber: string
  };
};

export type SignUpType = {
  id?:  MongooseTypes.ObjectId,
  name? : string,
  organizationName?: string,
  email? : string,
  contactNumber? : string,
  message : string
}

export type GetUserArgType = {
  id :  MongooseTypes.ObjectId
}

export type GetUserType = {
  name : string, 
  organizationName : string,
  email : string,
  contactNumber : string
}

export type SetPasswordArgsType  = {
  input : {
    id :  MongooseTypes.ObjectId,
    password : string
  }
}

export type UserInfoType = {
  id?:  MongooseTypes.ObjectId,
  name? : string,
  organizationName? : string,
  email? : string,
  contactNumber? : string,
  token? : string,
  message? : string
}

export type LoginArgsType = {
   input : {
     email : string,
     password : string
   }
}

export type UserVerificationType = {
  id? : MongooseTypes.ObjectId,
  message : string
}

  
  