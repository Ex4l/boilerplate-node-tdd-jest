const dbHandler = require("../../db.handler.tests");
const app = require("../../src/app");
const request = require("supertest");

describe("handle products api", () => {
  beforeAll(async () => {
    await dbHandler.connect();
  });

  afterAll(async () => {
    await dbHandler.clearDatabase();
    await dbHandler.closeDatabase();
  });

  it("should create a product", async () => {
  });

  it("should not create a product if no product is sent", async () => {
  });

  it("should return the created products after creating a product", async () => {
  });

  it("should return a product by id", async () => {
  });

  it("should update the product", async () => {
   
  });

  it("should update a product that does not exists", async () => {
  });

  it("it should delete a product", async () => {
  });
});
