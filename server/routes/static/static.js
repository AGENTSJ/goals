const express = require('express')

const router = express.Router();




router.get('/',(req,res)=>{
    res.render('signup.pug');
})
router.get('/account',(req,res)=>{   
    
    res.render('home.pug' ,{heading:"no goals to display",obj:{title:'',time:'',desc:''}})
})

module.exports=router;


