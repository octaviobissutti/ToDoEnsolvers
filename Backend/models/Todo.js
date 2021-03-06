
const { DataTypes, ENUM } = require("sequelize");


module.exports = (sequelize) => {
  
  sequelize.define(
    'Todo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      state:{
        type: DataTypes.BOOLEAN,
    },

    status:{
type:DataTypes.ENUM("created","eliminated","pending","complete"),
defaultValue: "created"

    }
    },
    // { timestamps: false }
  );
};