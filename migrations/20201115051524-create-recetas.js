'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('recetas', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            urlArchivo: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            vencimiento: {
              type: Sequelize.DATE,
              allowNull: false,
            },
            paciente: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                  model: 'usuarios',
                  key: 'dni'
                }
              }, autor: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                  model: 'usuarios',
                  key: 'dni'
                }
              }, createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              }, updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              }
            });
        },
        down: async (queryInterface, Sequelize) => {
          await queryInterface.dropTable('recetas');
        }
    };