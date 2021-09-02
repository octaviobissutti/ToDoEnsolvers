const { Router } = require("express");
const todoControllers =require("../controllers/todoControllers")



const router= Router();
//TRAER TODAS LAS TODO EN BASE DE DATOS
router.get("/",todoControllers.getAllTodo);
//TRAER UNA UNICA TODO POR ID
router.get("/:id",todoControllers.getTodoById);
//CREAR UNA TODO
router.post("/",todoControllers.createTodo);
//ELIMINAR UNA TODO
router.delete("/:id",todoControllers.deleteTodo);
