const ODM = require("mongoose");
const Product = require("../models/Product");

const Products = {
  featured: (request, response) => {
    Product
      .find()
      .exec()
      .then(shoes => {
        response
          .status(200)
          .json({
            meta: shoes.length,
            data: shoes
          })
      })
      .catch(e => {
        response
          .status(500)
          .json({
            error: e
          });
      });
  },

  create: (request, response) => {
    const {
      colors,
      name,
      type,
      price,
      url,
      featured
    } = request.body;

    const newShoe = new Product({
      _id: new ODM.Types.ObjectId(),
      colors,
      name,
      type,
      price,
      url,
      featured
    });

    newShoe
      .save()
      .then(shoe => {
        response
          .status(200)
          .json({
            message: "Shoe created",
            data: shoe
          });
      })
      .catch(e => {
        response
          .status(500)
          .json({
            error: e
          });
      });
  }
};

module.exports = Products;
