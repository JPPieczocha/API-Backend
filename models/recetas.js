'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class recetas extends Model {
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
            foreignKey: 'paciente'
          }
        )
        turnos.belongsTo(models.usuarios,
          {
            as: 'usuarios',
            foreignKey: 'autor'
          }
        )
      }
    };
    recetas.init({
        urlArchivo: {
          type: DataTypes.STRING,
          allowNull:false
        },
        vencimiento: {
          type: DataTypes.DATE,
          allowNull: false
        },
        paciente: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        autor: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
        }, {
          sequelize,
          modelName: 'recetas',
        });
      return recetas;
    };