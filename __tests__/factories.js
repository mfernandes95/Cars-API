const faker = require("faker");
const { factory } = require("factory-girl");
const { User } = require("../src/app/models");
const { Car } = require("../src/app/models/Car");

factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

// factory.define("Car", Car, {
//   brand: "Ford",
//   model: "AWS",
//   year: 2018,
//   fuel: "DIESEL",
//   color: "white",
//   price: 100000.0,
// });

// brand: DataTypes.STRING,
// model: DataTypes.STRING,
// year: DataTypes.INTEGER,
// fuel: DataTypes.STRING,
// color: DataTypes.STRING,
// price: DataTypes.DOUBLE,

module.exports = factory;
