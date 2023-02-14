const express = require('express');
const path= require('path')
const connectdb =require('./db/db')
const goal = require('./db/model/goalmodel');
const app = express();

//template setting
app.set('view engine','pug');
app.set('views','C:/Users/abhij/Desktop/works/webdevelopment/workbuffer/GOALS/front/html');

app.use(express.urlencoded())

app.use(express.static('assets'))

//db
try{
    
    connectdb()
}catch(e){
    console.log('error in database connection')
}





   ////////////////////////routes///////////////////////


app.get('/',(req,res)=>{
    res.render('home.pug' ,{heading:"no goals to display",obj:{title:'',time:'',desc:''}})
})
app.post('/add',(req,res)=>{
    
    
    
})
app.listen(80,()=>{
    console.log("http://localhost/");
})