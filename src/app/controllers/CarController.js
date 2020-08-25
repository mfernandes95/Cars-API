const { User } = require("../models");
const { Car } = require("../models");

class CarController {
  async store(req, res) {
    try {
      const data = req.body;
      console.log("reqq", req.userId);
      const car = await Car.create({
        ...data,
        user_id: 1,
      });
      console.log("carrrrr", car);
      return res.status(200).json({ car: car });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async index(req, res) {
    try {
      const cars = await Car.findAll();
      console.log("carrrrr", cars);
      return res.status(200).json({ car: cars });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new CarController();
