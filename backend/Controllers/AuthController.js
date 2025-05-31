const UserModel=require("../Models/User");

const personalInfo=async(req,res)=>{
    try{
        const{firstName,lastName,dateOfBirth,nationality,email,phone,departureDate,returnDate,accommodation,specialRequests,healthDeclaration,emergencyContact,medicalConditions}=req.body;
        const newUser=new UserModel({firstName,lastName,dateOfBirth,nationality,email,phone,departureDate,returnDate,accommodation,specialRequests,healthDeclaration,emergencyContact,medicalConditions});
        await newUser.save();
        res.status(201)
            .json({
                message:"Information saved successfully",
                success: true
            })


    }catch (err){

        
        res.status(500).json({
            message:"Internal  error",err,
            success: false                
        })

    }
}

module.exports={
    personalInfo
}

