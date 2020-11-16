'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol_usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rol_usuarios.belongsTo(models.usuarios,
        {
          as: 'usuarios',
          foreignKey: 'dni'
        }
      )

      rol_usuarios.belongsTo(models.roles,
        {
          as: 'roles',
          foreignKey: 'id_rol'
        }
      )
    }
  };
  rol_usuarios.init({
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'rol_usuarios',
  });
  return rol_usuarios;
};