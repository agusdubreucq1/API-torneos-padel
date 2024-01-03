import { Sequelize } from "sequelize-typescript";
import path from 'path';
const __dirname = process.cwd()


// export const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
//   host: process.env.DB_HOST,
//   dialect: "mysql",
// });

const user = process.env.DB_USER ?? "root";
const pass = process.env.DB_PASSWORD ?? "";
const host = process.env.DB_HOST ?? "localhost";
const name = process.env.DB_NAME ?? "padel";

console.log(name, user, pass, host);

const sequelize = new Sequelize(name, user, pass, {
  host: host,
  dialect: "mysql",
  models: [__dirname],
});

export default sequelize;
