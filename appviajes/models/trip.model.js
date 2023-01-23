const getAll = () => {
    return db.query('SELECT  v.*, h.nombre as "Nombre_hotel", c.dni as "Dni_cliente" FROM tbi_clientes_viajes as tbi JOIN clientes AS c ON c.id = tbi.fk_cliente JOIN viajes AS v ON v.id = tbi.fk_viaje JOIN hoteles AS h ON h.id = v.hotel_id');
}

const getById = (tripId) => {
    return db.query('SELECT  * FROM viajes WHERE id = ?', [tripId]);
};

const getByIdDataClient = (tripId) => {
    return db.query('SELECT  v.*, h.nombre as "Nombre_hotel", c.dni as "Dni_cliente" FROM tbi_clientes_viajes as tbi JOIN clientes AS c ON c.id = tbi.fk_cliente JOIN viajes AS v ON v.id = tbi.fk_viaje JOIN hoteles AS h ON h.id = v.hotel_id WHERE v.id = ?;', [tripId]);
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

const deleteById = (tripId) => {
    return db.query('DELETE FROM viajes WHERE id = ?', [tripId]);
}
module.exports = {
    getAll,
    create,
    getById,
    getByIdDataClient,
    tripByClient,
    update,
    deleteById
}