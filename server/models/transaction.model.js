import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(
    {
        name:{
            required:true,
            type:String
        },
        price:{
            required:true,
            type:String,
        },
        description:{
            type:String,
            required:true,
        },
        datetime:{
            type:Date,
            required:true
        }
    },
    {timestamps:true}
)

export const Transaction = mongoose.model('Transaction',transactionSchema);