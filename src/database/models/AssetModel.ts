import { Model, INTEGER, STRING, DECIMAL, DATE } from "sequelize";
import database from '.'

class Assets extends Model {
  id!: number;
  ticker!: string;
  value!: number;
  quantity!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Assets.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  ticker: {
    type: STRING,
    allowNull: false,
  },
  value: {
    type: DECIMAL(10, 2),
    allowNull: false,
  },
  quantity: {
    type: INTEGER,
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
  modelName: 'Assets'
});

export default Assets;