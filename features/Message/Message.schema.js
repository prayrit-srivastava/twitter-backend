import mongoose from "mongoose";

export const MessageSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Msg'
    }]
});
export const MsgSchema = ({
    to: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    from: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    content: String,
    isactive : {
        type:Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})