const Joi=require('joi');
const personalInfoValidation=(req,res,next)=>{
    const schema=Joi.object({
        // Stage 1 - Personal Information
        firstName:Joi.string().min(3).max(70).required(),
        lastName:Joi.string().max(100).required(),
        dateOfBirth:Joi.date().iso().required(),
        nationality:Joi.string().max(100).required(),
        email:Joi.string().email().required(),
        phone:Joi.string().length(10).pattern(/^\d{10}$/).required().messages({
            'string.length': 'Phone number must be exactly 10 digits.',
            'string.empty': 'Phone number is required.' }),
        // Stage 2 - Travel Preferences
        email:Joi.string().email().required(),
        departureDate: Joi.date().iso().required(),
        returnDate: Joi.date().iso().required(),
        accommodation: Joi.string().valid('Space Hotel', 'Martian Base').required(),
        specialRequests: Joi.string().allow('').optional(),

    // Stage 3 - Health and Safety
        healthDeclaration: Joi.string().valid('Yes', 'No').required(),
        emergencyContact: Joi.string().required(),
        medicalConditions: Joi.string().allow('').optional()
        })
        
    const{error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: "Validation error",
            error: error.details[0].message
        });
    }
    next();
}
module.exports={
    personalInfoValidation
}