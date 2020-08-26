const { User } = require("../models");
const { Car } = require("../models");

class CarController {
  async store(req, res) {
    try {
      const data = req.body;
      console.log("reqq", req.userId);
      const car = await Car.create({
        ...data,
        user_id: req.userId,
      });
      return res.status(200).json({ car: car });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async index(req, res) {
    try {
      const { page = 1 } = req.query;

      const limit = 2;

      const cars = await Car.findAll({
        where: { user_id: req.userId },
        order: ["id"],
        attributes: ["id", "brand", "model", "year", "fuel", "color", "price"],
        limit: limit,
        offset: (page - 1) * limit,
        include: [
          {
            model: User,
            as: "owner",
            attributes: ["id", "name"],
          },
        ],
      });

      return res.status(200).json({ car: cars });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async show(req, res) {
    try {
      const car = await Car.findOne({
        where: { id: req.params.id },
      });

      if (!car) return res.status(404).json({ message: "Car not found" });

      return res.status(200).json({ car: car });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const car = await Car.findOne({
        where: { id: req.params.id },
      });

      if (!car) return res.status(404).json({ message: "Car not found" });

      if (car.user_id !== req.userId)
        return res
          .status(401)
          .json({ message: "You cannot update cars by other owner" });

      await car.update(req.body);

      return res.status(200).json({ car: car });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  // await user.update(req.body);
}

module.exports = new CarController();
