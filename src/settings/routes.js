var router = require("express").Router();
const { getAll, findOne, update, deleteById, add } = require('./controllers');

router.get('/', getAll);
router.get('/:id', findOne);
router.post('/add', add);
router.put('/update/:id', update);
router.delete('/:id', deleteById);

module.exports = router;
