const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('todo ok')
})

module.exports = router;