const {DataTypes} = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define('folder',{
       title: {
          type: DataTypes.STRING,
        },
      }
    );
};