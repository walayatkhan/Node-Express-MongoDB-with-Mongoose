const businessObject = require('./business');



async function getAll(req, res) {
    try {
        const result = await businessObject.getAll();
        return result ? res.json({ data: result, success: true }) :
            res.json({ error: 'failed to get data', success: false });
    }
    catch (e) {
        return res.json({ error: 'failed to get data from db. ' + e, success: false });
    }
}

async function findOne(req, res) {
    try {
        const result = await businessObject.findOne(req.params.id);
        return result ? res.json({ data: result, success: true }) :
            res.json({ error: 'failed to get data.', success: false });
    }
    catch (e) {
        return res.json({ error: 'failed to get data from db', success: false });
    }
}

async function add(req, res) {
    try {
        console.log('yes in controller', req.body);
        const result = await businessObject.add(req.body);
        return result ? res.json({ data: result, success: true }) :
            res.json({ error: 'failed to add.', success: false });
    }
    catch (e) {
        return res.json({ error: 'failed to add data in the from db.', success: false });
    }
}
async function update(req, res) {
    try {
        console.log('udate body here in controller', req.body);
        const result = await businessObject.update(req.params.id, req.body);
        console.log('resuelt in controller.....', result);
        return result ? res.json({ data: result, success: true }) :
            res.json({ error: 'failed to add.', success: false });
    }
    catch (e) {
        return res.json({ error: 'failed to update data in the db.', success: false });
    }
}
async function deleteById(req, res) {
    try {
        const result = await businessObject.delete(req.params.id);
        return result ? res.json({ data: result, success: true }) :
            res.json({ error: 'failed to delete.', success: false });
    }
    catch (e) {
        return res.json({ error: 'failed to delete data from the db.', success: false });
    }
}

module.exports = { getAll, findOne, add, update, deleteById };