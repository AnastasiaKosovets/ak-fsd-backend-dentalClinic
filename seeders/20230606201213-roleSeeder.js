'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
   return queryInterface.bulkInsert('Roles', [
    {
      id: 1,
      name: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: "patient",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: "doctor",
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
