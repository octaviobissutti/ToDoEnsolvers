const {DataTypes} = require('sequelize');
const db = require('../db');


const Todo = sequelize.define('todo', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    }, 
    name:{
        type: DataTypes.STRING,
    },
    state:{
        type: DataTypes.BOOLEAN,
    }
});


module.exports = Todo;