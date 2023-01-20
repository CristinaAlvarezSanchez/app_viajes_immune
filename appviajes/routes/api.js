const router = require('express').Router();

router.use('/clients', require('./api/clients'));

module.exports = router;