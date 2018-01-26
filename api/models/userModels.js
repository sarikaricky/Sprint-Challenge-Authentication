const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  // create your user schema here.
});new Schema({
  username: {}
     unique: true, 
     title: String, 

  password: {
     type: String,
     required: true,


module.exports = mongoose.model('User', UserSchema);
