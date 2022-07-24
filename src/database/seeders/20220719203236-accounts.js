'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => queryInterface.bulkInsert('Accounts',
  [
    {
      userId: 1,
      assetId: 3,
      assetQuantity: 100,
      assetValue: 23.69,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      userId: 2,
      assetId: 1,
      assetQuantity: 50,
      assetValue: 68.68,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      userId: 3,
      assetId: 4,
      assetQuantity: 10,
      assetValue: 2.79,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      userId: 1,
      assetId: 2,
      assetQuantity: 300,
      assetValue: 29.07,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      userId: 2,
      assetId: 10,
      assetQuantity: 500,
      assetValue: 14.5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      userId: 10,
      assetId: 50,
      assetQuantity: 1000,
      assetValue: 20.88,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },

  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Accounts', null, {}),


};
