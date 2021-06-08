const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id:{
      type:DataTypes.STRING,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
    },
    difFicult:{
      type:DataTypes.ENUM('1','2','3','4','5'),
    },
    season:{
      type: DataTypes.ENUM('summer','winter','spring','fall'),  
    },
  });
};