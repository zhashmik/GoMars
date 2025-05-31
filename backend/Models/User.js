const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    // Stage 1: Personal Information
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
    },
      // Stage 2: Travel Preferences
    departureDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    accommodation: {
        type: String,
        enum: ['Space Hotel', 'Martian Base'],
        required: true
    },
    specialRequests: {
        type: String,
        default: ''
    },

    // Stage 3: Health and Safety
    healthDeclaration: {
        type: String,
        enum: ['Yes', 'No'],
        required: true
    },
    emergencyContact: {
        type: String,
        required: true
    },
    medicalConditions: {
        type: String,
        default: ''
    }

});

const userModel=mongoose.model('users',userSchema);
module.exports=userModel;