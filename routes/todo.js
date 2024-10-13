const express =require('express');
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");

const {getTodo} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");


router.put("/updateTodo/:id",updateTodo);

router.post("/createTodo", createTodo);
router.delete("/deleteTodo/:id",deleteTodo);


router.get("/getTodos",getTodo);
module.exports = router;