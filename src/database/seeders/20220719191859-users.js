'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
  [
    {
      id: 1,
      email: 'teste1@teste.com',
      password: '12345678',
      balance: 10000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 2,
      email: 'teste2@teste.com',
      password: '87847584',
      balance: 200000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 3,
      email: 'teste3@teste.com',
      password: '187654321',
      balance: 150000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 4,
      email: 'teste4@teste.com',
      password: '99999999',
      balance: 1000000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id:5,
      email: 'teste5@teste.com',
      password: '55555555',      
      balance: 100,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 6,
      email: 'teste6@teste.com',
      password: '12800000',
      balance: 500000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 7,
      email: 'teste7@teste.com',
      password: '12345678password',
      balance: 80000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 8,
      email: 'teste8@teste.com',
      password: '12345678senha',
      balance: 112000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 9,
      email: 'teste9@teste.com',
      password: '1234567senha8',
      balance: 10000000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 10,
      email: 'teste10@teste.com',
      password: '12345senha678',
      balance: 250000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),


  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),

};
