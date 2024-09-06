require("dotenv").config();

const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { MY_SQL_DATABASE, MY_SQL_USER, MY_SQL_PASSWORD, MY_SQL_HOST } = process.env;

const ConsoleFormatter = require("../common/formatters/consoleFormatter");
const consoleFormatter = new ConsoleFormatter();

const sequelize = new Sequelize(MY_SQL_DATABASE, MY_SQL_USER, MY_SQL_PASSWORD, {
  host: MY_SQL_HOST,
  dialect: "mysql",
  logging: (sql, timing) => {
    console.log(`${consoleFormatter.yellow}[SQL Executado]:`, sql, `[Executado em ${timing}ms]`);
  },
  benchmark: true,
  define: {
    timestamps: true,
    underscored: true,
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
  },
});

const modelsDir = path.join(__dirname, "models");
const database = {};

fs.readdirSync(modelsDir)
  .filter(file => (file.endsWith('.js') && file !== 'index.js'))
  .forEach(file => {
    const model = require(path.join(modelsDir, file));
    model.init(sequelize);

    database[model.name] = model;
  });

  
Object.keys(database).forEach((modelName) => {
  if (database[modelName].associate) {
    database[modelName].associate(database);
  }
});

(async () => {
  try {
    console.log(`\n${consoleFormatter.bright}${consoleFormatter.underscore}${consoleFormatter.blue}>>>>> Synchronizing models with the database... <<<<<\n`);
    await sequelize.sync({});
    console.log(`\n${consoleFormatter.blue}>>>>>Successful synchronization with the database! <<<<<\n\n...`);

    console.log(`\n${consoleFormatter.blue}>>>>> Connecting to the database... <<<<<\n`);
    await sequelize.authenticate();
    console.log(`\n${consoleFormatter.blue}>>>>> Successful connection to the database! <<<<<\n\n...`);
  } catch (error) {
    console.error(`${consoleFormatter.red}An error occurred while connecting or synchronizing with the database:`, error);
  }

  console.log(consoleFormatter.reset);
})();

module.exports = sequelize;