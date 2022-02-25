var express = require("express");
const uid2 = require("uid2");
var router = express.Router();
var sum = require("../utils/sum");

var bcrypt = require("bcrypt");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/to-uppercase", function (req, res) {
  let a = req.body.firstname;
  let b = a.toUpperCase();
  res.json({ firstname: b });
});

router.post("/sum", function (req, res) {
  let a = req.body.op1;
  let b = req.body.op2;
  let c = sum(a, b);
  res.json({ sum: c });
});

//route projet "le S"

// products list from db
router.get("/products", function (req, res, next) {
  res.json({});
});

// product from db by ID
router.get("/products/:id", function (req, res, next) {
  res.json({});
});

var userDB = [];

// sign-up
router.post("/users/actions/sign-up", function (req, res, next) {
  console.log("---req.body", req.body);

  var hash = bcrypt.hashSync(req.body.password, 10);

  userDB.push({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    pseudo: req.body.pseudo,
    password: hash,
    token: uid2(32),
  });

  console.log("---userDB", userDB);

  // const found = array1.find(element => element > 10);
  const userFind = userDB.find((user) => user.pseudo);

  console.log("---userFind", userFind);

  res.json({});
});

// sign-in
router.post("/users/actions/sign-in", function (req, res, next) {
  res.json({});
});

// order registration
router.post("/orders", function (req, res, next) {
  res.json({});
});

// orders history by user ID
router.get("/orders/users/:id", function (req, res, next) {
  res.json({});
});

// profile by user Id (slide 15)
router.get("/users/:id", function (req, res, next) {
  res.json({});
});

// profile update
router.put("/users/update/:token", function (req, res, next) {
  res.json({});
});

// profile delete by user Id (slide 15)
router.delete("/users/delete/:token", function (req, res, next) {
  res.json({});
});

module.exports = router;
