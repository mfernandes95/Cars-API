const routes = require("express").Router();

const authMiddleware = require("./app/middlewares/auth");

const SessionController = require("./app/controllers/SessionController");
const CarController = require("./app/controllers/CarController");

routes.post("/sessions", SessionController.store);

routes.post("/cars", CarController.store);
routes.use(authMiddleware);
routes.post("/sessions", SessionController.store);

// routes.put("/cars", CarController.update);
// routes.get("/cars/:id", CarController.index);
// routes.get("/cars", CarController.show);
// routes.delete("/cars", CarController.delete);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
