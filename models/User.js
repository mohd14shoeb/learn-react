const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

// Load the Schema into mongoose
mongoose.model('users', userSchema);
