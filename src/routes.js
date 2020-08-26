const routes = require("express").Router();

const authMiddleware = require("./app/middlewares/auth");

const SessionController = require("./app/controllers/SessionController");
const CarController = require("./app/controllers/CarController");
const UserController = require("./app/controllers/UserController");

routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.store);

routes.use(authMiddleware);

// CARS
routes.post("/cars", CarController.store);
routes.get("/cars", CarController.index);
routes.get("/cars/:id", CarController.show);
routes.put("/cars/:id", CarController.update);
routes.delete("/cars/:id", CarController.delete);

module.exports = routes;
