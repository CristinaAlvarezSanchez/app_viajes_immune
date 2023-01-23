const { getAll, create, getById, update, deleteById, getClientesViajes, getByHotel } = require('../../models/client.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [clientes] = await getAll();
        res.json(clientes);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// recupera todos los clientes y sus viajes
router.get('/viajes', async (req, res) => {
    try {
        const [clientes] = await getClientesViajes()
        res.json(clientes)

    } catch (error) {
        res.json({ fatal: error.message });
    }
})

// recupera los clientes de un hotel
router.get('/hotels/:hotelId', async (req, res) => {
    try {
        const { hotelId } = req.params;
        const [clientes] = await getByHotel(hotelId);
        res.json(clientes);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

// crea un nuevo cliente
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const [result] = await create(req.body);
        const [client] = await getById(result.insertId);
        res.json(client[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// actualiza los datos de un cliente
router.put('/:clientId', async (req, res) => {
    try {
        const { clientId } = req.params;
        await update(clientId, req.body);
        const [cliente] = await getById(clientId);
        res.json(cliente[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

// borra un cliente
router.delete('/:clientId', async (req, res) => {
    try {
        const { clientId } = req.params;
        const [result] = await deleteById(clientId);
        res.json({ registros_eliminados: result.affectedRows })
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

module.exports = router;