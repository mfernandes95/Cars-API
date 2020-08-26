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
      user_id: DataTypes.INTEGER,
    },
    {}
  );

  Car.associate = function (models) {
    Car.belongsTo(models.User, { foreignKey: "user_id", as: "owner" });
  };

  return Car;
};

// static associate(models) {
//     this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
//   }

//  marca, modelo, ano, combustível, cor e preço.
