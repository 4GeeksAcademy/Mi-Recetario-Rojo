// sequelizeConfig.mjs
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  port: 5432,
});

export default sequelize;