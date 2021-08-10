var router = require("express").Router();
const { getUsers, getUser, addUser, updateUser, deleteUser } = require('./controllers');


router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/add', addUser);
router.put('/update/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;
