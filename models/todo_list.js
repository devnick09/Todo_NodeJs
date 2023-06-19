const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    }   
})

const TodoLists = mongoose.model('TodoLists', todoSchema);
module.exports  = TodoLists;