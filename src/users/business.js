
const { Users } = require('../mongoose');

class Business {

    async getAll() {
        try {
            let result = await Users.getAll();
            return result;
        } catch (e) { return e; }
    }
    async findOne(id) {
        try {
            let result = await Users.findOne({ _id: id });
            return result;
        }
        catch (e) { return e; }
    }

    async addUser(data) {
        try {
            let result = await Users.save(data);
            return { result };
        }
        catch (e) { return e; }
    }
    async updateUser(id, data) {
        try {

            return await Users.update({ _id: id }, data);

        } catch (e) { return e; }
    }

    async delete(id) {
        try {
            let result = await Users.delete({ _id: id });
            return { result };
        }
        catch (e) { console.log(e); }
    }
}

module.exports = new Business;