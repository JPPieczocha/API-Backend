'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('historiales_clinicos', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'item_historiales_clinicos',
          key: 'id'
        }
      }
      ,
      pacientes: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'dni'
        }
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
    await queryInterface.dropTable('historiales_clinicos');
  }
};