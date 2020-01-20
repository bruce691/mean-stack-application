/**
 * for mongodb connection
 */
const mongoose = require('mongoose');
require('dotenv').config();
const conString = process.env.DB_CONNECTION;
console.log(conString);
// const conString = "mongodb://localhost:27017/customerDb";
// const conString =  "mongodb+srv://admin:Admin678@cluster0-iqrdy.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  conString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) console.log('Successfully connect to MondoDB...');
    else
      console.log(
        'Connection to MongoDb failed :' + JSON.stringify(err, undefined, 2)
      );
  }
);

module.exports = mongoose;
