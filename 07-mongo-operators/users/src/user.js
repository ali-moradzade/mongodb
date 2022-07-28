const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const UserSchema = new Scheme({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        validate: {
            validator: (name) => name.length > 2,
            message: "Name must be longer than 2 characters."
        },
    },
    postCount: Number
});

const User = mongoose.model('user', UserSchema);
module.exports = User;

