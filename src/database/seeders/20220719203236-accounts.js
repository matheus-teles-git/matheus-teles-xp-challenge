'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => queryInterface.bulkInsert('Accounts',
  [
    {
      userId: 1,
      assetId: 3,
      assetQuantity: 100,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      userId: 2,
      assetId: 1,
      assetQuantity: 50,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      userId: 3,
      assetId: 4,
      assetQuantity: 10,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      userId: 1,
      assetId: 2,
      assetQuantity: 300,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      userId: 2,
      assetId: 10,
      assetQuantity: 500,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      userId: 10,
      assetId: 50,
      assetQuantity: 1000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },

  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Accounts', null, {}),


};
