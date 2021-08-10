
const { Settings } = require('../mongoose');


class Business {

    async getAll() {
        try {
            let result = await Settings.getAll();
            return result;
        } catch (e) {
            return e;
        }
    }
    async findOne(id) {
        try {
            let result = await Settings.findOne({ _id: id });
            return result;
        }
        catch (e) { return e; }
    }

    async add(data) {
        try {
            console.log('in business ', data);
            let result = await Settings.save(data);
            return { result };
        }
        catch (e) {
            return e;
        }
    }
    async update(id, data) {
        try {

            return await Settings.update({ _id: id }, data);

        } catch (e) { return e; }
    }

    async delete(id) {
        try {
            let result = await Settings.delete({ _id: id });
            return { result };
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = new Business;