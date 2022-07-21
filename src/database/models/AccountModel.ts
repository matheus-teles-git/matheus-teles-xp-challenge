import { Model, INTEGER, DATE, ForeignKey } from "sequelize";
import database from '.'
import Assets from "./AssetModel";
import Users from "./UserModel";

class Accounts extends Model {
  userId!: ForeignKey<number>
  assetId!:  ForeignKey<number>;
  assetValue!: number;
  assetQuantity!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Accounts.init({
  assetQuantity: {
    type: INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  assetValue: {
    type: INTEGER,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },

}, {
  sequelize: database,
  modelName: 'Accounts'
});

Accounts.belongsToMany(Users, { through: Accounts, foreignKey: 'userId', otherKey: 'assetId' });
Accounts.belongsToMany(Assets, { through: Accounts, foreignKey: 'assetId', otherKey: 'userId' });

export default Accounts;