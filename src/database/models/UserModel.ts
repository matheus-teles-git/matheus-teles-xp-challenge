import { INTEGER, DATE, DECIMAL, Model, STRING } from "sequelize";
import database from '.';


class Users extends Model {
  id!: number;
  email!: string;
  password!: string;
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
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
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
  modelName: 'Users',
});

export default Users;

