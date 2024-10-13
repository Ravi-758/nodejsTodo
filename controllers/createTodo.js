const Todo = require("../models/Todo");

exports.createTodo = async(req,res) => {
    try{
        const {title,description} =req.body;
        const response =await Todo.create({title,description});
        res.status(200).json({
            success:true,
            data:response,
            message:'entry created successfully'
        })
    }catch(err){
        console.log("not successfully")
        console.error(err)
    }
}