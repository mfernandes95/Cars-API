const routes = require("express").Router();

const authMiddleware = require("./app/middlewares/auth");

const SessionController = require("./app/controllers/SessionController");
const CarController = require("./app/controllers/CarController");
const UserController = require("./app/controllers/UserController");

routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.store);

routes.use(authMiddleware);
routes.post("/cars", CarController.store);
routes.get("/cars", CarController.index);
routes.get("/cars/:id", CarController.show);
// routes.post("/sessions", SessionController.store);

// routes.put("/cars", CarController.update);
// routes.delete("/cars", CarController.delete);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
