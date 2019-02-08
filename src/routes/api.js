const { Router } = require("express");

const Products = require("../controllers/Products");

const app = Router();

app.route("/shoes")
  .get(Products.featured)
  .post(Products.create);

module.exports = app;
