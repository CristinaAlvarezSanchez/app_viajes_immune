const router = require('express').Router();

router.use('/clients', require('./api/clients'));
router.use('/trips', require('./api/trips'));
router.use('/hotels', require('./api/hotels'));

module.exports = router;