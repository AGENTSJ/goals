const express = require('express')

const router = express.Router();




router.get('/',(req,res)=>{
    res.render('signup.pug');
})
router.get('/login',(req,res)=>{   
    
    res.render('login.pug');
})

module.exports=router;


// res.render('home.pug' ,{heading:"no goals to display",obj:{title:'',time:'',desc:''}})