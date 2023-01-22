const { getAll, create, getById, update, deleteById, getHotelClients } = require('../../models/hotel.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [hoteles] = await getAll();
        res.json(hoteles);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [hotel] = await getById(result.insertId);
        res.json(hotel[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

router.put('/:hotelId', async (req, res) => {
    try {
        const { hotelId } = req.params
        await update(hotelId, req.body)
        const [hotel] = await getById(hotelId)
        res.json(hotel[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

router.delete('/:hotelId', async (req, res) => {
    try {
        const { hotelId } = req.params;
        const [result] = await deleteById(hotelId)
        res.json({ registros_eliminados: result.affectedRows })
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

module.exports = router;