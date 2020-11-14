'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turnos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      turnos.belongsTo(models.usuarios,
        {
          as: 'usuarios',
          foreignKey: 'medico'
        }
      )

      turnos.belongsTo(models.usuarios,
        {
          as: 'usuarios',
          foreignKey: 'paciente'
        }
      )
    }
  };
  turnos.init({
    medico: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    horario: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tomado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    paciente: DataTypes.INTEGER,
    tipoConsulta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'turnos',
  });
  return turnos;
};