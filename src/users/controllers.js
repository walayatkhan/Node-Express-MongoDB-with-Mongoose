const businessObject = require('./business');



async function getUsers(req, res) {
    try {
        const result = await businessObject.getAll();
        return result ? res.json({ data: result, success: true }) :
            res.json({ error: 'failed to get data', success: false });
    }
    catch (e) {
        return res.json({ error: 'failed to get data from db. ' + e, success: false });
    }
}

async function getUser(req, res) {
    try {
        const result = await businessObject.findOne(req.params.id);
        return result ? res.json({ data: result, success: true }) :
            res.json({ error: 'failed to get data.', success: false });
    }
    catch (e) {
        return res.json({ error: 'failed to get data from db', success: false });
    }
}

async function addUser(req, res) {
    try {
        const result = await businessObject.addUser(req.body);
        return result ? res.json({ data: result, success: true }) :
            res.json({ error: 'failed to add.', success: false });
    }
    catch (e) {
        return res.json({ error: 'failed to add data in the from db.', success: false });
    }
}
async function updateUser(req, res) {
    try {
        console.log('udate body here in controller', req.body);
        const result = await businessObject.updateUser(req.params.id, req.body);
        console.log('resuelt in controller.....', result);
        return result ? res.json({ data: result, success: true }) :
            res.json({ error: 'failed to add.', success: false });
    }
    catch (e) {
        return res.json({ error: 'failed to update data in the db.', success: false });
    }
}
async function deleteUser(req, res) {
    try {
        const result = await businessObject.delete(req.params.id);
        return result ? res.json({ data: result, success: true }) :
            res.json({ error: 'failed to delete.', success: false });
    }
    catch (e) {
        return res.json({ error: 'failed to delete data from the db.', success: false });
    }
}

module.exports = { getUsers, getUser, addUser, updateUser, deleteUser };