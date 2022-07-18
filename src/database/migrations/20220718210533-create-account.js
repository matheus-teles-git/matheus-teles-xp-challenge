'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      assetId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      assetQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      assetValue: {
        allowNull: false,
        type: Sequelize.DECIMAL
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
  async down(queryInterface) {
    await queryInterface.dropTable('Accounts');
  }
};