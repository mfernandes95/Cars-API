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
    const user = await factory.create("User", {
      // password: "123123",
    });
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
});
