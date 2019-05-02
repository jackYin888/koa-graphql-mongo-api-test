const mongoose = require('mongoose');
const initDB = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/graphql', {
      useNewUrlParser: true,
    })
    .then(
      () => {
        console.log('connected....');
      },
      err => {
        console.error(err);
      }
    );
};
module.exports = initDB;
