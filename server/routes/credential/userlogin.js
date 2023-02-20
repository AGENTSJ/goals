const express = require('express');
const router = express.Router();
router.use(express.json());
const {body,validationResult}= require('express-validator');
const mongoose = require('mongoose');
const user = require('../../db/model/usermodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

let jwt_secret = "settinggoalsarefuniffollowedthrouh";
router.post('/',
[body('email').isEmail(),body('password').isLength({min:6})]
,async(req,res)=>{
    let valid = validationResult(req);
    if(valid.isEmpty()){
        try{
            let loger = await user.findOne({email:req.body.email});
            if(loger!=null){

                let valid = await bcrypt.compare(req.body.password,loger.password);
                if (valid ==true){
                    let data = {
                        user:loger._id
                    }
                    let auth_token= jwt.sign(data,jwt_secret);
                    res.send(auth_token);
                }
            }else{
                res.status(401).send('user not found');
            }
        }catch(e){
            res.status(401).send(`internal server error try again`);
        }
    }else{
        res.status(401).send('validation error provide appropriate format');
    }

});

module.exports= router;

