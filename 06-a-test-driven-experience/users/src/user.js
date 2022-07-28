const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const UserSchema = new Scheme({
    name: String
});

const User = mongoose.model('user', UserSchema);
module.exports = User;

