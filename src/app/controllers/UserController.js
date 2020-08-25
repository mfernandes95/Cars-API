const { User } = require("../models");

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      console.log("carrrrr", user);
      return res.status(200).json({ user: user });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
