import { Model, INTEGER, DATE, ForeignKey, DECIMAL } from "sequelize";
import database from '.'
import Assets from "./AssetModel";
import Users from "./UserModel";

class Accounts extends Model {
  userId!: ForeignKey<number>
  assetId!:  ForeignKey<number>;
  assetQuantity!: number;
  assetValue!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Accounts.init({
  assetQuantity: {
    type: INTEGER,
    allowNull: false,
  },
  assetValue: {
    type: DECIMAL(10, 2),
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
  modelName: 'Accounts'
});

Accounts.belongsTo(Users, { foreignKey: 'userId' });
Accounts.belongsTo(Assets, { foreignKey: 'assetId' });

Users.hasMany(Accounts, { foreignKey: 'userId' });
Assets.hasMany(Accounts, { foreignKey: 'assetId' });

export default Accounts;