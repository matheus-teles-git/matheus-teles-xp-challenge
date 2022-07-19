import { Model, INTEGER, DATE, ForeignKey } from "sequelize";
import database from '.'
import Assets from "./AssetModel";
import Users from "./UserModel";

class Accounts extends Model {
  userId!: ForeignKey<number>
  assetId!:  ForeignKey<number>;
  assetQuantity!: number;
  assetValue!: ForeignKey<number>;
  createdAt!: Date;
  updatedAt!: Date;
}

Accounts.init({
  // userId: {
  //   type: INTEGER,
  //   allowNull: false,
  // },
  // assetId: {
  //   type: INTEGER,
  //   allowNull: false,
  // },
  assetQuantity: {
    type: INTEGER,
    allowNull: false,
  },
  // assetValue: {
  //   type: DECIMAL(10,2),
  //   allowNull: false,
  // },
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

Accounts.belongsToMany(Users, { through: Accounts, foreignKey: 'userId', otherKey: 'assetId' });
Accounts.belongsToMany(Assets, { through: Accounts, foreignKey: 'assetId', otherKey: 'userId' });
Accounts.belongsToMany(Accounts, { through: Accounts, foreignKey: 'assetValue', otherKey: 'value' });
Accounts.belongsToMany(Assets, { through: Accounts, foreignKey: 'value', otherKey: 'assetValue' });



export default Accounts;