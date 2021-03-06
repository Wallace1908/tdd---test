const request = require("supertest");

const app = require("../app");

test.skip("to uppercase", async () => {
  await request(app)
    .post("/to-uppercase")
    .send({
      // ==> req.body
      firstname: "john",
    })
    .expect({
      // ==> res.json
      firstname: "JOHN",
    });
});

test.skip("sum", async () => {
  await request(app)
    .post("/sum")
    .send({
      op1: 30,
      op2: 20,
    })
    .expect({
      sum: 50,
    });
});

test("saving user", async () => {
  const response = await request(app).post("/users/actions/sign-up").send({
    // ==> req.body
    firstname: "john",
    lastname: "doe",
    pseudo: "wallace",
    password: "abcdefg",
  });
  expect(typeof response.body.userFind.token).toBe("string");
});

test("password > 8 character", async () => {
  const response = await request(app).post("/users/actions/sign-up").send({
    // ==> req.body
    firstname: "john",
    lastname: "doe",
    pseudo: "wallace",
    password: "abcdefg",
  });
  expect(typeof response.body.userFind.token).toBe("string");
});

test("password < 8 character", async () => {
  const response = await request(app)
    .post("/users/actions/sign-up")
    .send({
      // ==> req.body
      firstname: "john",
      lastname: "doe",
      pseudo: "wallace",
      password: "abcdefg",
    })
    .expect({ result: false, error: "password must be over 8 characters" });
});
