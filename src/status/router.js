const config = require('../configuration/config');
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(`server is running on port ${config.PORT}`);
    res.send({ Status: 'Smile! Api is running!' })
});

module.exports = router;