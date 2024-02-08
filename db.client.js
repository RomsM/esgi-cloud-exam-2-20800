const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://dbexercice1plateformescloud_user:x9lqmSRB9FIfiqovcJyWPsonJbhZ8I6G@dpg-clfhklg3nsgc738usogg-a/dbexercice1plateformescloud', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
