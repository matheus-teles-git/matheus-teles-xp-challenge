import { Model, INTEGER, DATE, DECIMAL } from "sequelize";
import database from '.'

class Accounts extends Model {
  userId!: number;
  assetId!: number;
  assetQuantity!: number;
  assetValue!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Accounts.init({
  userId: {
    type: INTEGER,
    allowNull: false,
  },
  assetId: {
    type: INTEGER,
    allowNull: false,
  },
  assetQuantity: {
    type: INTEGER,
    allowNull: false,
  },
  assetValue: {
    type: DECIMAL(10,2),
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },

}, {
  sequelize: database,
  modelName: 'accounts'
});

export default Accounts;