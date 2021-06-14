const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
    idAct:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING,
    },
    difficult:{
      type:DataTypes.ENUM('1','2','3','4','5'),
    },
    duration:{
      type:DataTypes.TIME,
    },
    season:{
      type: DataTypes.ENUM('summer','winter','spring','fall'),  
    },
  });
};