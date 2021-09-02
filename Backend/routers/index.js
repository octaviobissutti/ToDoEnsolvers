const { Router } = require("express");
const express= require ("express");
const router = express.Router();
const routerUser=require('./routerUser');
const routerTodo=require('./routerTodo')
module.exports=()=>{
    router.use("/todo/user",routerUser)
    router.use("todo/todo",routerTodo)
}