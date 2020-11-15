'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historiales_clinicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      historiales_clinicos.belongsTo(models.usuarios,
        {
          as: 'usuarios',
          foreignKey: 'dni'
        }
      )

      historiales_clinicos.belongsTo(models.item_historiales_clinicos,
        {
          as: "item_historiales_clinicos",
          foreignKey: 'id'
        }
      )
    }
  };
  
  historiales_clinicos.init({
    id_item: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pacientes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'historiales_clinicos',
  });
  return historiales_clinicos;
};