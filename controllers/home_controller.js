const TodoLists = require('../models/todo_list')
// function for redirecting to main home page
module.exports.home = async function(req,res){
    // fetching todo list using mongoose
    const todo = await TodoLists.find();
    // sending todo lsit data to home page view
    return res.render('home',{
        title:"Home",
        todoList: todo
    })
}

// function for creating todo list
module.exports.createTodo = function(req,res){
    
    dueDate =req.body.due_date.split('-'); // splitting date and taking montha value
    let newdate='';
    newdate = DateValue(dueDate);     
    
    // crating new todo and storing into DB
    TodoLists.create({ 
        desc: req.body.desc,
        completed: 0,
        dueDate: newdate
    });
    // returning on homepage if todo is created
    return res.redirect('back');
}

// function for deleting todo list
module.exports.deleteTodo = async function(req,res){
    // get todo ID from query string
    let id = req.query.id;
    // delete todo if ID matches
    await TodoLists.deleteOne({_id: id});

    return res.redirect('back');
}

// fuction for upadting todo list state
module.exports.updateTodo = async function(req,res){
    // get todo ID from query string
    let id = req.query.id;
    // get completed value from query string
    let completed = req.query.completed;
    
    if (completed == 'false') {
        completed = true;
    }else{
        completed = false;
    }

    await TodoLists.updateOne({_id: id}, {$set:{completed: completed}});

    return res.redirect('back');
}

// fuction to convert numeric date to string
function DateValue(dueDate){
    let months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'] // static value for implementing monthe value


    newdate = '';
    let monapp = '';
    // checking months 
    if(dueDate[1] == '01'){
        monapp=months[0];
    }
    else if(dueDate[1] == '02'){
        monapp=months[1];
    }else if(dueDate[1] == '03'){
        monapp=months[2];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '04'){
        monapp=months[3];
    }else if(dueDate[1] == '05'){
        monapp=months[4];
    }else if(dueDate[1] == '06'){
        monapp=months[5];
    }else if(dueDate[1] == '07'){
        monapp=months[6];
    }else if(dueDate[1] == '08'){
        monapp=months[7];
    }else if(dueDate[1] == '09'){
        monapp=months[8];
    }else if(dueDate[1] == '10'){
        monapp=months[9];
    }else if(dueDate[1] == '11'){
        monapp=months[10];
    }else if(dueDate[1] == '12'){
        monapp=months[11];
    }
    newdate =dueDate[2]+'-'+monapp+'-'+dueDate[0] // displaying date in dd-mm-yyyy formate
    return newdate;
}