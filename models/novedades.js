'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class novedades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      turnos.belongsTo(models.usuarios,
        {
          as: 'usuarios',
          foreignKey: 'medico'
        }
      )
    }
  };
  Novedades.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    urlImagen:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    novedad:  {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    medico: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'novedades',
  });
  return Novedades;
};