const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://dbNameHere:PasswordHere@UsernameHere.qlc2g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


function connectToDB() {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(DB_URL, {
        useNewUrlParser: true, useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose Default connection open.');
    });
    mongoose.connection.on('error', () => {
        console.log('Mongoose default connection error');
    });
    mongoose.connection.on('disconnect', () => {
        console.log('Mongoose default connection disconnected');
    });
}

module.exports = connectToDB;


