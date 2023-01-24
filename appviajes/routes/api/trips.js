const { getTripByClientId } = require('../../models/client.model');
const { getAll, create, getById, tripByClient, getByIdDataClient, update, deleteById, createSimpleTrip, updateClientTrip, getByClient, updateHotelTrip } = require('../../models/trip.model');

const router = require('express').Router();

// muestra todos los viajes (su hotel asociado si el viaje tiene hotel)
router.get('/', async (req, res) => {
    try {
        const [viajes] = await getAll();
        res.json(viajes);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// devuelve un listado de los viajes asignados a un cliente 
router.get('/viajes-clientes/:clientId', async (req, res) => {
    try {
        const { clientId } = req.params;
        const [viajes] = await getByClient(clientId);
        res.json(viajes);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// asigna un viaje a un cliente
router.get('/viaje/:tripId/cliente/:clientId', async (req, res) => {
    try {
        const { tripId, clientId } = req.params;
        await tripByClient(tripId, clientId);
        const [trip] = await getTripByClientId(clientId, tripId);
        res.json(trip[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// asigna un hotel a un viaje
router.get('/viaje/:tripId/hotel/:hotelId', async (req, res) => {
    try {
        const { tripId, hotelId } = req.params;
        await updateHotelTrip(hotelId, tripId);
        const [trip] = await getById(tripId);
        res.json(trip[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

// actualiza el viaje asignado a un cliente
router.get('/viaje/:tripId/:newTripId/cliente/:clientId', async (req, res) => {
    try {
        const tripDate = req.params;
        const [viajeActual] = await getTripByClientId(tripDate.clientId, tripDate.tripId);
        if (viajeActual.length !== 0) {
            await updateClientTrip(tripDate);
            const [trip] = await getTripByClientId(tripDate.clientId, tripDate.newTripId);
            res.json(trip[0]);
        }
        else {
            res.json({ error: 'no hay coincidencias' });
        }

    } catch (error) {
        res.json({ fatal: error.message });
    }
})

// registra un nuevo viaje - sin cliente y sin hotel
router.post('/', async (req, res) => {
    try {
        const [result] = await createSimpleTrip(req.body);
        const [trip] = await getById(result.insertId);
        res.json(trip[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// registra un nuevo viaje y su hotel asociado - sin cliente
router.post('/:hotelId', async (req, res) => {
    try {
        const { hotelId } = req.params;
        const [result] = await create(hotelId, req.body);
        const [trip] = await getById(result.insertId);
        res.json(trip[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// registra un nuevo viaje y su hotel asociado a la vez que lo asocia al cliente
router.post('/hotel/:hotelId/cliente/:clientId', async (req, res) => {
    try {
        const { hotelId, clientId } = req.params;
        const [result] = await create(hotelId, req.body);
        const tripId = result.insertId;
        await tripByClient(tripId, clientId);
        const [trip] = await getTripByClientId(clientId, tripId);
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

// borra un viaje 
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