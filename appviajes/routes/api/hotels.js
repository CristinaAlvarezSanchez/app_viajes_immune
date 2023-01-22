const router = require('express').Router();
router.get('/', async (req, res) => {
    res.json('todo ok')
})

router.post('/', (req, res) => {
    res.json('todo ok')
})

router.put('/', (req, res) => {
    res.json('todo ok')
})

router.delete('/', (req, res) => {
    res.json('todo ok')
})

module.exports = router;