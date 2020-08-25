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
    const car = await factory.attrs("Car");

    const response = await request(app).post("/cars").send(car);

    expect(response.status).toBe(200);
  });

  it("should list cars", async () => {
    const car = await factory.create("Car");

    const response = await request(app).get("/cars");

    expect(response.status).toBe(200);
  });
});
