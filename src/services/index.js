const dbConnection = require('./db_connection');

async function initialize() {
    await dbConnection();
}

module.exports = initialize;

