const express = require('express');
const router = express.Router();
router.use(express.json());
const {body,validationResult}= require('express-validator');
const user = require('../../db/model/usermodel');
const bcrypt = require('bcrypt');


router.post('/',
[body("name").notEmpty(),body('email').isEmail(),body('password').isLength({min:6})]
,async(req,res)=>{
    let valid = validationResult(req);
    if(valid.isEmpty()){
        try{
            var salt = await bcrypt.genSalt(10);
            var hashpass = await bcrypt.hash(req.body.password,salt);

            await user.create({
                name:req.body.name,
                email:req.body.email,
                password:hashpass
            })
            res.send('user created try to login');
        }catch(e){
            res.status(401).send(`internal server error try again`);
            
        }
    }else{
        res.status(401).send('validation error provide appropriate format');
    }

});

module.exports= router;