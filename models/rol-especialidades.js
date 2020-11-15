'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol_especialidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rol_especialidades.belongsTo(models.rol,
        {
          as: 'rol',
          foreignKey: 'id_rol'
        })

      rol_especialidades.belongsTo(models.especialidades,
        {
          as: 'especialidades',
          foreignKey: 'id_especialidad'
        })
    }
  };
  rol_especialidades.init({
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_especialidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'rol-especialidades',
  });
  return rol_especialidades;
};