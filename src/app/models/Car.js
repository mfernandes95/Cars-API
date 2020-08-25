module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "Car",
    {
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      year: DataTypes.INTEGER,
      fuel: DataTypes.STRING,
      color: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      sequelize,
    }
  );

  return Car;
};

//  marca, modelo, ano, combustível, cor e preço.
