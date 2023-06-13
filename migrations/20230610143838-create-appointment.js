'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      treatment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Treatments',
          key: 'id'
        }
      },
      price: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};