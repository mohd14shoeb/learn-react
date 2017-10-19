// key.js where we detect which env file to get 
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pro.js');
} else {
  module.exports = require('./dev.js');
}