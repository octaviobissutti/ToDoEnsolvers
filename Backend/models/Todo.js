
const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  
  sequelize.define(
    "todo",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      state:{
        type: DataTypes.BOOLEAN,
    }
    },
    { timestamps: false }
  );
};