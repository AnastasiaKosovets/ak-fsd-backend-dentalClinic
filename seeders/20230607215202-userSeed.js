'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        email: "fran35@fran.com",
        password: bcrypt.hashSync('fran1234', 8),
        firstName: "Francisco",
        lastName: "da Villa",
        document: "44672435B",
        address: "C/Cortes Valencianas 40, 2, Paterna, Valencia, 46980",
        telefonNumber: "696441278",
        collegialNumber: null,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        email: "natalia@natalia.com",
        password: bcrypt.hashSync('ntblia2', 8),
        firstName: "Natalia",
        lastName: "Lluch",
        document: "42168794G",
        address: "C/Joaquín Tirado, 48, Llíria, Valencia, 46160",
        telefonNumber: "656447123",
        collegialNumber: null,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        email: "working@working.com",
        password: bcrypt.hashSync('workTG1234', 8),
        firstName: "Sergio",
        lastName: "Gimenez",
        document: "47983546A",
        address: "C/Tórtola 5, San Antonio de Benageber, Valencia, 46184",
        telefonNumber: "686411278",
        collegialNumber: null,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        email: "yulia@yulia.com",
        password: bcrypt.hashSync('sunnyDay2', 8),
        firstName: "Yulia",
        lastName: "Levshina",
        document: "Y9912356X",
        address: "C/Cortes Valencianas 13, 2-1, Valencia, 46009",
        telefonNumber: "694567278",
        collegialNumber: null,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        email: "martaD@martaD.com",
        password: bcrypt.hashSync('Mars4568', 8),
        firstName: "Marta",
        lastName: "Torres",
        document: "43674435V",
        address: "C/Teruel, 35, Valencia, 46035",
        telefonNumber: "696441278",
        collegialNumber: null,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        email: "juan@juan.com",
        password: bcrypt.hashSync('dentalStart1', 8),
        firstName: "Juan",
        lastName: "Zubichi",
        document: "42872135S",
        address: "C/Cortes Valencianas 10, 1-3, Paterna, Valencia, 46980",
        telefonNumber: "636343278",
        collegialNumber: 123456789,
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        email: "luciamed@luciamed.com",
        password: bcrypt.hashSync('lucimed234', 8),
        firstName: "Lucia",
        lastName: "de Castro",
        document: "45671735C",
        address: "C/Medico Peris, 2, La Pobla de Vallbona, Valencia, 46185",
        telefonNumber: "786441278",
        collegialNumber: 789456123,
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        email: "svetlanmed@svetlanmed.com",
        password: bcrypt.hashSync('lanmedli12', 8),
        firstName: "Svetlana",
        lastName: "Razhevska",
        document: "Y4523896B",
        address: "C/Turia, 2, Valencia, 46009",
        telefonNumber: "724647278",
        collegialNumber: 456789123,
        role_id: 3,
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
