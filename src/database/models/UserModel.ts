import { INTEGER, DATE, DECIMAL, Model } from "sequelize";
import database from '.';

class Users extends Model {
  id!: number;
  balance!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
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
  modelName: 'users',
});

export default Users;