import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    userName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        required: true
    },
    ban:{
        type:Boolean,
        required: true
    },
    address:{
        country:{
            type:String,
            required: true
        },
        state:{
            type:String,
            required: true
        },
        city:{
            type:String,
            required: true
        },
        postalCode:{
            type:Number,
            required: true
        },
        street:{
            type:String,
            required: true
        },
        streetNumber:{
            type:Number,
            required: true
        },
        phoneNumber:{
            type:Number,
            required: true
        },
        description:{
            type:String,
            required: true
        }
    }
})

export const User = model("User", userSchema)