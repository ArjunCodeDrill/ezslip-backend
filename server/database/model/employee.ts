import { model, Schema } from 'mongoose';

const EmployeeSchema = new Schema({
    userId : { 
        type  :  Schema.Types.ObjectId,
        ref: 'user',
    },
    firstName : { 
        type : String 
    },
    lastName : { 
        type : String 
    },
    employeeCode : { 
        type: String 
    },
    designation : { 
        type :String 
    },
    panNumber : { 
        type :String 
    },
    salary : { 
        type : String 
    },
    dob : { 
        type : Date 
    },
    doj : { 
        type : Date 
    },
    epf : { 
        isEnabled : { 
            type : Boolean 
        },
        number : { 
            type : String 
        }
    },
    esi :{ 
        isEnabled : { 
            type : Boolean 
        },
        number : { 
            type : String
        }
    },
    employeeStatus : {
       type :Boolean,
       default: false
    }
},{
    timestamps : true
})

export default model('employee', EmployeeSchema);