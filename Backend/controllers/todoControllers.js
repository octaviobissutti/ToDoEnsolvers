const Todo = require("../db");
const Folder = require("../models/Folder");



exports.getAllTodo = async (req, res, next) => {

  try {

    const todos = await Todo.findAll({})
    return res.status(200).send(todos)
  } catch {


    res.status(400).json({
      msg: "hubo un eror",
    });
    next();

  }
  }

exports.getTodo = async (req, res, next) => {
  const { id} = req.params;
  try {

    const todo = await Todo.findOne({ where: { id }})
    return res.status(200).send(todo)
  } catch {


    res.status(400).json({
      msg: "hubo un eror",
    });
    next();

  }


}


exports.createTodo = async (req, res) => {
  const { name } = req.body;
  try {

    const todoNew = await Todo.findOrCreate({ where: { name: name } });
    return res.status(200).send(todoNew)


  } catch {
    res.status(400).json({
      msg: "hubo un eror",
    });
    next();

  }





}






exports.deleteTodo = async (req, res, next) => {
  const { id } = req.params;

  // Eliminar la tarea
  const result = await Todo.destroy({ where: { id } });

  if (!result) return next();

  res.status(200).send('Tarea Eliminada Correctamente')
  
}


// exports.changeStateTodo = async (req, res, next) => {
//   const { id } = req.params;
//   const todo = await Todo.findOne({ where: { id } });

//   // cambiar el estado
//   let state = 0;
//   if (todo.state === state) {
//     state = 1;
//   }
//   todo.state = state;

//   const result = await todo.save();

//   if (!result) return next();

//   res.status(200).send('Actualizado');
// }


// exports.addTodo = async(req,res,next) =>{
//     const folder = await Folder.findOne({where: { url: req.params.url }});
//     const {todo} = req.body;
//     const state = 0;
//     const folderId = folder.id;

//     const result = await Todo.create({ todo, state, folderId});

//     if(!result){
//         return next();
//     }

//     res.redirect(`/folder/${req.params.url }`);

// };
