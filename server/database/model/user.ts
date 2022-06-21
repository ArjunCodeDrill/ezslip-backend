import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    organizationName :{
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true,
    },
    contactNumber: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        minlength: 8,
    },
    organizationImage:{
        type:String,
    },
    organizationLegalName: {
        type: String,
    },
    organizationType: {
        type: String,
   },
    address: {
        type: String,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isActivated: {
        type:Boolean,
        default: false
    },
    userType: {
        type:String,
        enum: ['user','admin'],
        default: 'user'
    },
    isDeleted: {
        type:Boolean,
        default: false
    }
},{
    timestamps: true
})

export default model('user', UserSchema);