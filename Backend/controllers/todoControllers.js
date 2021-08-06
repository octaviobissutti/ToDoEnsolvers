const Todo = require("../models/Todo");
const Folder = require("../models/Folder");

exports.addTodo = async(req,res,next) =>{
    const folder = await Folder.findOne({where: { url: req.params.url }});
    const {todo} = req.body;
    const state = 0;
    const folderId = folder.id;

    const result = await Todo.create({ todo, state, folderId});

    if(!result){
        return next();
    }

    res.redirect(`/folder/${req.params.url }`);

};




exports.changeStateTodo =  async (req, res,next) => {
    const { id } = req.params;
    const todo = await Todo.findOne({where: { id }});

    // cambiar el estado
    let state = 0;
    if(todo.state === state) {
        state = 1;
    }
    todo.state = state;

    const result = await todo.save();

    if(!result) return next();
    
    res.status(200).send('Actualizado');
  }



  exports.deleteTodo = async(req,res,next)=>{
    const { id } = req.params;

    // Eliminar la tarea
    const result = await todo.destroy({where : { id  }});

    if(!result) return next();

    res.status(200).send('Tarea Eliminada Correctamente');
  };