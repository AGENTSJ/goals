const express = require('express');
const router = express.Router();
// const auth = require('../../middleware/auth')
router.use(express.json());

router.get('/',(req,res)=>{
    res.status(200).send("hello");
    
});

module.exports=router;
