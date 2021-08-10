const mongoose = require('mongoose');

class Query {
    constructor(key, model) {
        this.key = key, this.model = model
    }

    getAll(params) {
        let query = {};
        
        return { name: 'walayat khan', email: 'example@gmail.com' }
    }

}

module.exports = Query;