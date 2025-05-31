const { personalInfo } = require('../Controllers/AuthController');
const { personalInfoValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();
// router.post('/login',(req,res)=>{
//     res.send('login success');
// });
// // router.post('/signup',(req,res)=>{
// //     res.send('signup success');
// // });

router.post('/personalInfo',personalInfoValidation,personalInfo);

module.exports=router;