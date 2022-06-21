import { model, Schema } from 'mongoose';

const OrganizationDetailsSchema = new Schema({
    user :{
        type  : Schema.Types.ObjectId,
        required: true,
        ref : 'user'
    },
    basicSalary : {
        type : String,
        required : true
    },
    HRA :{
        type : Number,
        required : true
    },
    CIN :{
        type: String,
        required : true
    },
    EPF : {
        type: String,
        required : true
    },
    ESI : {
        type: String,
        required : true
    }
},{
    timestamps : true
})

export default model('organizationDetails', OrganizationDetailsSchema);