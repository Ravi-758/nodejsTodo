const Todo  = require("../models/Todo");


exports.deleteTodo= async(req,res)=>{
    try{
        const {id} = req.params;
      await Todo.findByIdAndDelete(id);
        
       
        res.status(200).json({
            success:true,
            data:todo,
            message:`deleted successfully`
        })
    }catch(error){
        console.log("found an error")
    }
}