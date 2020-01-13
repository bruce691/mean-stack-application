/**
 * for express web api server
 */
const bodyParser = require("body-parser");
const { mongoose } = require("./db");
const customer = require("./Controller/CustomerController");

const express = require("express");
const app = express();

//added middleware code
app.use(bodyParser.json());
app.use("/customers", customer);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server listening at port :${port}`);
});
