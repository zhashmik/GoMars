const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    dateOfBirth:{
        type:Date,
        required: true,
    },
    nationality:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    //  lowercase: true,
    //  trim: true,
    //  match: [/\S+@\S+\.\S+/, 'Invalid email format']
    },
    phone:{
        type:String,
        required: true,
    //  trim: true,
    //  match: [/^\d{10,15}$/, 'Invalid phone number format']
    }

});

const userModel=mongoose.model('users',userSchema);
module.exports=userModel;