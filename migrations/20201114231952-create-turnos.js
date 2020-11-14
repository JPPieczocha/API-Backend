'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('turnos', {
      medico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'usuarios',
          key: 'dni'
        }
      },
      horario: {
        type: Sequelize.DATE,
        primaryKey: true,
        allowNull: false
      },
      tomado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      paciente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'dni'
        }
      },
      tipoConsulta: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('turnos');
  }
};