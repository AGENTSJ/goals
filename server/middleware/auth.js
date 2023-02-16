const express = require('express');
const jwt = require('jsonwebtoken');
let jwt_secret = "settinggoalsarefuniffollowedthrouh";

async function auth(req,res,next){
    try{
        let user = jwt.verify(req.header('auth_token'),jwt_secret);
        req.user = user.user;

    }catch(e){
        res.send(`invalid authentification`);
    }
    next();
}
module.exports=auth;
