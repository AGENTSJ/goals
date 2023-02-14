const mongoose =require('mongoose');




async function connectdb(){

   await mongoose.connect('mongodb://127.0.0.1/goal-app');
    console.log('database connection established');

}    

module.exports=connectdb;