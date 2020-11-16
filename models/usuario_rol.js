'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario_rol extends Model {
    
    
    static associate(models) {
      usuario_rol.belongsTo(models.usuarios,
        {
          as: 'usuarios',
          foreignKey: 'dni'
        }
      )

      usuario_rol.belongsTo(models.rol,
        {
          as: 'rol',
          foreignKey: 'id_rol'
        })

    }
  };
  usuario_rol.init({
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'usuario_rol',
  });
  return usuario_rol;
};