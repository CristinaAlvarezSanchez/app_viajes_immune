const getAll = () => {
    return db.query('SELECT * FROM clientes');
};

const getClientesViajes = () => {
    return db.query('SELECT c.nombre, c.apellidos, c.email, v.fecha_salida, v.fecha_vuelta, h.nombre as "Hotel" FROM tbi_clientes_viajes as tbi JOIN clientes AS c ON c.id = tbi.fk_cliente JOIN viajes AS v ON v.id = tbi.fk_viaje JOIN hoteles AS h ON h.id = v.hotel_id');
}

const getById = (clientId) => {
    return db.query(' SELECT * FROM clientes WHERE id = ?', [clientId]);
}

const getTripByClientId = (clientId, tripId) => {
    return db.query('SELECT  v.*, h.nombre as "Nombre_hotel", c.dni as "Dni_cliente" FROM viajes AS v  LEFT JOIN tbi_clientes_viajes as tbi on tbi.fk_viaje = v.id LEFT JOIN clientes AS c ON c.id = tbi.fk_cliente LEFT JOIN  hoteles AS h ON h.id = v.hotel_id WHERE c.id = ? and v.id = ?;', [clientId, tripId]);
}

const getByHotel = (hotelId) => {
    return db.query('SELECT c.nombre, c.apellidos, c.dni, v.fecha_salida as "fecha_entrada", v.fecha_vuelta as "fecha_salida" FROM clientes as c JOIN tbi_clientes_viajes AS tbi ON tbi.fk_cliente = c.id JOIN viajes AS v ON v.id = tbi.fk_viaje  JOIN hoteles AS h ON h.id = v.hotel_id WHERE h.id = ?', [hotelId]);
}

const create = ({ nombre, apellidos, direccion, email, telefono, fecha_nacimiento, dni }) => {
    return db.query(
        'INSERT INTO clientes (nombre, apellidos, direccion, email, telefono, fecha_nacimiento, dni) VALUES (?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, telefono, fecha_nacimiento, dni]);
}

const update = (clientId, { nombre, apellidos, direccion, email, telefono, fecha_nacimiento, dni }) => {
    return db.query(
        'UPDATE clientes SET nombre = ?, apellidos = ?, direccion = ?, email= ?, telefono = ?, fecha_nacimiento = ?, dni = ? WHERE id = ?', [nombre, apellidos, direccion, email, telefono, fecha_nacimiento, dni, clientId]
    );
}

const deleteById = (clientId) => {
    return db.query('DELETE FROM clientes WHERE id = ?', [clientId]);
}



module.exports = {
    getAll,
    create,
    getById,
    getTripByClientId,
    update,
    deleteById,
    getClientesViajes,
    getByHotel
}