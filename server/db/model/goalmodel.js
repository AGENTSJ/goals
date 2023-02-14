const mongoose = require('mongoose');

var goalSchema =  mongoose.Schema({
    title:String,
    time:String,
    desc:String
})

var goal= mongoose.model('goal',goalSchema);

module.exports=goal;

