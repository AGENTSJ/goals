const express = require('express');
// const path= require('path')
const connectdb =require('./db/db');
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








app.use('/',require('./routes/static/static'))
app.use('/userlogin',require('./routes/credential/userlogin'));
app.use('/createuser',require('./routes/credential/createuser'));
app.use('/test',require('./routes/functionalities/test'))


app.listen(80,()=>{
    console.log("http://localhost/");
})