'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'userId',
        references: {
          model: 'Users',
          key: 'id'
        },
        primaryKey: true,
      },
      assetId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'assetId',
        references: {
          model: 'Assets',
          key: 'id'
        },
        primaryKey: true,
      },
      assetQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      assetValue: {
        defaultValue: 0,
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
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