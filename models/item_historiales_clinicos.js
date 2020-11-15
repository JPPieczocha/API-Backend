'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_historiales_clinicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item_historiales_clinicos.belongsTo(models.usuarios,
        {
          as: 'usuarios',
          foreignKey: 'medico'
        }
      )
    }
  };
  item_historiales_clinicos.init({
    cabecera: {
      type: DataTypes.STRING,
      allowNull: false
    },
    detalle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    medico: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'item_historiales_clinicos',
  });
  return item_historiales_clinicos;
};