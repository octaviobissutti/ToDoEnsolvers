const express = require('express');
const router = express.Router();

const folderControllers = require('../controllers/folderControllers');
const todoControllers = require('../controllers/todoControllers');

module.exports = function() {
//Ruta de creacion de folder
router.post('/new-folder',
    folderControllers.createNewFolder
)
//Ruta de creacion de todo
router.post('/new-todo',
    todoControllers.addTodo
)
//Ruta de cambios de todo
router.put('/todo/:id', 
    todoControllers.changeStateTodo
);
//Ruta de eliminacion de todo
router.delete('/todo/:id', 
    todoControllers.deleteTodo
);


return router;

}