const getAll = () => {
    return db.query('SELECT  v.*, h.nombre as "Nombre_hotel" FROM viajes AS v LEFT JOIN  hoteles AS h ON h.id = v.hotel_id');
}

const getById = (tripId) => {
    return db.query('SELECT  * FROM viajes WHERE id = ?', [tripId]);
};

const getByIdDataClient = (tripId) => {
    return db.query('SELECT  v.*, h.nombre as "Nombre_hotel", c.dni as "Dni_cliente" FROM viajes AS v  LEFT JOIN tbi_clientes_viajes as tbi on tbi.fk_viaje = v.id LEFT JOIN clientes AS c ON c.id = tbi.fk_cliente LEFT JOIN  hoteles AS h ON h.id = v.hotel_id WHERE v.id = ?;', [tripId]);
}

const getByClient = (clientId) => {
    return db.query('SELECT  v.*, h.nombre as "Nombre_hotel", c.dni as "Dni_cliente" FROM viajes AS v  LEFT JOIN tbi_clientes_viajes as tbi on tbi.fk_viaje = v.id LEFT JOIN clientes AS c ON c.id = tbi.fk_cliente LEFT JOIN  hoteles AS h ON h.id = v.hotel_id WHERE c.id = ?;', [clientId]);
}

const createSimpleTrip = ({ fecha_salida, fecha_vuelta, idvuelo_ida, idvuelo_vuelta }) => {
    return db.query('INSERT INTO viajes (fecha_salida, fecha_vuelta, idvuelo_ida, idvuelo_vuelta) VALUES (?, ?, ?, ?)', [fecha_salida, fecha_vuelta, idvuelo_ida, idvuelo_vuelta]);
}

const create = (hotel_id, { fecha_salida, fecha_vuelta, idvuelo_ida, idvuelo_vuelta }) => {
    return db.query('INSERT INTO viajes (fecha_salida, fecha_vuelta, idvuelo_ida, idvuelo_vuelta, hotel_id) VALUES (?, ?, ?, ?, ?)', [fecha_salida, fecha_vuelta, idvuelo_ida, idvuelo_vuelta, hotel_id]);
}

const tripByClient = (trip_id, client_id) => {
    return db.query('INSERT INTO tbi_clientes_viajes (fk_viaje, fk_cliente) VALUES (?,?)', [trip_id, client_id]);
}

const update = (tripId, { fecha_salida, fecha_vuelta, idvuelo_ida, idvuelo_vuelta, hotel_id }) => {
    return db.query('UPDATE viajes SET fecha_salida = ?, fecha_vuelta = ?, idvuelo_ida = ?, idvuelo_vuelta = ?, hotel_id = ? WHERE id = ?', [fecha_salida, fecha_vuelta, idvuelo_ida, idvuelo_vuelta, hotel_id, tripId]);
}

const updateClientTrip = ({ tripId, newTripId, clientId }) => {
    return db.query('UPDATE tbi_clientes_viajes SET fk_cliente = ?, fk_viaje = ? WHERE fk_cliente = ? AND fk_viaje = ?', [clientId, newTripId, clientId, tripId]);
}

const updateHotelTrip = (hotelId, tripId) =>{
    return db.query ('UPDATE viajes SET hotel_id = ? WHERE id = ?', [hotelId, tripId]);
}

const deleteById = (tripId) => {
    return db.query('DELETE FROM viajes WHERE id = ?', [tripId]);
}



module.exports = {
    getAll,
    createSimpleTrip,
    create,
    getById,
    getByIdDataClient,
    getByClient,
    tripByClient,
    update,
    updateClientTrip,
    updateHotelTrip,
    deleteById
}