const { User } = require("../models");

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);

      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists)
        return res.status(400).json({ error: "user already exists!" });
      console.log("carrrrr", user);
      return res.status(200).json({ user: user });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
