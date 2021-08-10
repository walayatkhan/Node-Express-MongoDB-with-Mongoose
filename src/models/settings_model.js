const mongoose = require('mongoose');
const { validateEmail } = require('../helpers/email_helper');

const settingsSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'MyApp'
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validateEmail, 'please enter a valid email.']
    },
    contact: {
        type: String,
        default: '+92 3018 5276 733'
    },
    address: {
        type: String,
        default: ''
    },
    slogan: {
        type: String,
        default: 'All about quality.'
    },
    logo: {
        type: String,
        default: ''
    },
    currency: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Settings', settingsSchema);