'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Appointments', [
      {
        id: 1,
        doctor_id: 8,
        patient_id: 1,
        treatment_id: 1,
        price: 3000,
        date: "2023-07-10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        doctor_id: 8,
        patient_id: 2,
        treatment_id: 3,
        price: 3000,
        date: "2023-06-10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        doctor_id: 7,
        patient_id: 3,
        treatment_id: 1,
        price: 2500,
        date: "2023-06-10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        doctor_id: 6,
        patient_id: 6,
        treatment_id: 6,
        price: 100,
        date: "2023-06-10",
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
