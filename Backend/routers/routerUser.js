const { Router } = require("express");
const userControllers =require("../controllers/todoControllers")



const router= Router();
//TRAER TODAS LAS TODO EN BASE DE DATOS
router.get("/",userControllers.getAllUser);
//TRAER UNA UNICA TODO POR ID
router.get("/:id",userControllers.getUSer);
//CREAR UNA TODO
router.post("/",userControllers.createUser);
//ELIMINAR UNA TODO
router.delete("/:id",userControllers.deleteUser);
