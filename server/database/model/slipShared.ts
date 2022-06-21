import { model, Schema } from 'mongoose';

const SlipSharedSchema = new Schema({
    user :{
        type: Schema.Types.ObjectId,
        required: true
    },
    employee :{
        type  :  Schema.Types.ObjectId,
        required: true
    },
    date : {
        type : Date,
        required : true
    }
})

export default model('slipshared', SlipSharedSchema);