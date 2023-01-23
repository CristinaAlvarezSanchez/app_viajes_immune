const { getAll, create, getById, tripByClient, getByIdDataClient, update, deleteById } = require('../../models/trip.model');

const router = require('express').Router();

// muestra todos los viajes (con el dni del cliente y su hotel asociado)
router.get('/', async (req, res) => {
    try {
        const [viajes] = await getAll(); 
        res.json(viajes); 
    } catch (error) {
        res.json({ fatal: error.message });
    }
}); 

// registra un nuevo viaje y su hotel asociado - sin cliente
router.post('/:hotelId', async (req, res) => {
    try {
        const { hotelId } = req.params;
        const [result] = await create(hotelId, req.body)
        const [trip] = await getById(result.insertId)
        res.json(trip[0])

    } catch (error) {
        res.json({ fatal: error.message });
    }
}); 

// asigna un viaje a un cliente
router.get('/viaje/:tripId/cliente/:clientId', async (req, res) => {
    try {
        const { tripId, clientId } = req.params; 
        await tripByClient(tripId, clientId); 
        const [trip] = await getByIdDataClient(tripId); 
        res.json(trip[0]); 
    } catch (error) {
        res.json({ fatal: error.message });
    }
}); 

// registra un nuevo viaje y su hotel asociado a la vez que lo asocia al cliente

router.post('/:hotelId/:clientId', async (req, res) => {
    try {
        const { hotelId, clientId } = req.params; 
        const [result] = await create(hotelId, req.body); 
        const tripId = result.insertId; 
        console.log(tripId); 
        await tripByClient(tripId, clientId); 
        const [trip] = await getByIdDataClient(tripId); 
        res.json(trip[0]); 
    } catch (error) {
        res.json({ fatal: error.message });
    }
}); 

// actualiza un viaje
router.put('/:tripId', async (req, res) => {
    try {
        const { tripId } = req.params;
        await update(tripId, req.body);
        const [trip] = await getById(tripId);
        res.json(trip[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}); 

router.delete('/:tripId', async (req, res) => {
    try {
        const { tripId } = req.params;
        const [result] = await deleteById(tripId);
        res.json({ registros_eliminados: result.affectedRows }); 
    } catch (error) {
        res.json({ fatal: error.message });
    }
}); 

module.exports = router;