const request = require("supertest");

const app = require("../../src/app");

const truncate = require("../utils/truncate");
const factory = require("../factories");
const { Car } = require("../../src/app/models/Car");

describe("Car", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should create a car", async () => {
    const user = await factory.create("User");
    const car = await factory.attrs("Car");

    const response = await request(app)
      .post("/cars")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send(car);

    expect(response.status).toBe(200);
  });

  it("should list cars", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .get("/cars")
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it("should list car by id", async () => {
    // console.log("caridddddddddd", car);

    const user = await factory.create("User", {});
    const car = await factory.create("Car", {
      user_id: user.id,
    });

    const response = await request(app)
      .get(`/cars/${car.id}`)
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });
});
