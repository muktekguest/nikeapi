const ODM = require("mongoose");

const Schema = new ODM.Schema({
  _id: ODM.Schema.Types.ObjectId,
  colors: [String],
  name: String,
  type: String,
  price: Number,
  url: String,
  featured: Boolean,
  category: String,
  closureType: String,
  color: String,
  size: String
}, {
  versionKey: false,
  timestamps: true
});

module.exports = ODM.model("Products", Schema);
