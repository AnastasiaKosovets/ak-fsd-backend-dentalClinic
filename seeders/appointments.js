'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Appointments', [
      {
        id: 1,
        user_id1: 8,
        user_id2: 1,
        treatment_id: 1,
        price: 3000,
        date: "2023-07-10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        user_id1: 8,
        user_id2: 2,
        treatment_id: 3,
        price: 3000,
        date: "2023-06-10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        user_id1: 7,
        user_id2: 3,
        treatment_id: 1,
        price: 2500,
        date: "2023-06-10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        user_id1: 6,
        user_id2: 6,
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
