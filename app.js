require("dotenv").config();

const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const ODM = require("mongoose");

const api = require("./src/routes/api");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

ODM.connect(MONGODB_URI, {
  useNewUrlParser: true
});

ODM.connection.on("connected", () => {
  const msg = {
    success: true,
    host: 'mLab'
  };

  console.log(JSON.stringify(msg, null, 2));
})

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1", api);

app.listen(PORT, () => {
  console.log(`Nike API running on PORT: ${ PORT }`);
})
