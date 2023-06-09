'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Treatments', [
      {
        id: 1,
        treatmentName: "Ortodoncia",
        description: "Invisalign o Brackets linguales incógnito",
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        treatmentName: "Endodoncia",
        description: "Se realiza con radiografía muy precisa cual nos permitirá ver tu grado de afectación, tiempo de trabajo y pasos a realizarte, comenzará el tratamiento",
        price: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        treatmentName: "Prótesis dentales",
        description: "Nuestro equipo de protésicos dentales en Valencia te recomendará la que mejor se adapte a tus necesidades para que vuelvas a tener la sonrisa perfecta",
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        treatmentName: "Prevención Bucal",
        description: "La prevención en odontología como en cualquier área de medicina, es algo muy importante que debemos concienciarnos a realizarla por costumbre ya que es menos costosa económicamente y menos indolora",
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        treatmentName: "Odontopediatría",
        description: "En nuestro Centro Odontológico tenemos los mejores expertos en odontopediatría en Valencia, poniendo al cuidado, mantenimiento y prevención la salud dental del niño desde su infancia hasta su adolescencia",
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        treatmentName: "Empastes",
        description: "Los empastes dentales son un procedimiento odontológico para la eliminación de una caries devolviendo al diente su forma y color natural",
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        treatmentName: "Primera consulta",
        description: "En la primera consulta tendrías una valoración del especialista y conocerías mejor nuestra clínica",
        price: 50,
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
