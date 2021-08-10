const mongoose = require('mongoose');
const { validateEmail } = require('../helpers/email_helper');

let UsersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        default: '',
    },
    last_name: {
        type: String,
        default: '',
    },
    user_name: {
        type: String,
        default: '',
        duplicate: false
    },
    email: {
        type: String,
        default: '',
        duplicate: false,
        validate: [validateEmail, 'please enter a valid email.']
    },
    user_type: {
        type: String,
        default: '',
    },
    email_verified_at: {
        type: String,
        default: '',
    },
    verification_code: {
        type: String,
        default: '',
    },
    password: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        default: '',
    },

});

module.exports = mongoose.model('Users', UsersSchema);