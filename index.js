const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.Port || 4000;


app.use(express.json());

const todoRoutes = require("./routes/todo")

app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log(`server started at port`);
})

const dbConnection = require("./config/database");
dbConnection();


app.get("/",(req,res)=>{
    res.send(`<h1>  This is homepage </h1>`);
})