'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
  [
    {
      id: 1,
      email: 'teste@teste.com',
      password: '12345678',
      balance: 10000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 2,
      email: 'teste@teste.com',
      password: '12345678',
      balance: 200000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 3,
      email: 'teste@teste.com',
      password: '12345678',
      balance: 150000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 4,
      email: 'teste@teste.com',
      password: '12345678',
      balance: 1000000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id:5,
      email: 'teste@teste.com',
      password: '12345678',      
      balance: 100,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 6,
      email: 'teste@teste.com',
      password: '12345678',
      balance: 500000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 7,
      email: 'teste@teste.com',
      password: '12345678',
      balance: 80000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 8,
      email: 'teste@teste.com',
      password: '12345678',
      balance: 112000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 9,
      email: 'teste@teste.com',
      password: '12345678',
      balance: 10000000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      id: 10,
      email: 'teste@teste.com',
      password: '12345678',
      balance: 250000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),


  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),

};
