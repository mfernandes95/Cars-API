const { User } = require("../models");

class CarController {
  async store(req, res) {
    try {
      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new CarController();
