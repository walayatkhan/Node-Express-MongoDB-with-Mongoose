const mongoose = require('mongoose');

class BaseQuery {
    constructor(key, model) {
        this.key = key;
        this.model = model;
    }

    getAll(params) {
        console.log('working here....');
        let query = {};
        for (let key in params) {
            params[key] != '' ? (query[key] = params[key]) : null;
        }
        let key = this.key;

        console.log('key.....', key);
        console.log('query.....', query);

        try {
            return mongoose.model(key).find(query);

        } catch (e) {
            return e;
        }
    }

    findOne(params) {
        console.log('find one id ....', params);
        let query = {};
        for (let key in params) {
            params[key] != '' ? (query[key] = params[key]) : null;
        }
        let key = this.key;

        try {
            return mongoose.model(key).findOne(query);

        } catch (e) {
            return e;
        }
    }

    async save(data) {
        console.log('data in query.js here as', data);
        let newModel = new this.model();
        for (let key in data) {
            newModel[key] = data[key];
        }

        try {
            return await newModel.save();
        }
        catch (e) {
            return e;
        }
    }

    async update(id, data) {
        console.log('yes updated data here in base_query', id, data);

        let query = {};

        let key = this.key;
        try {
            let resutl = mongoose.model(key).findByIdAndUpdate(id, data);
            if (resutl) {
                return resutl;
            }
        } catch (e) { return e; }
    }

    delete(params) {
        console.log('in delete.....', params);
        let query = {};

        for (let key in params) {
            query[key] != '' ? query[key] = params[key] : null;
        }

        let key = this.key;
        try {
            return mongoose.model(key).findOne(query).remove();
        } catch (e) {
            return e;
        }
    }



}

module.exports = BaseQuery;