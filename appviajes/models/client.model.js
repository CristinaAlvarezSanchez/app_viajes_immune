const getAll = () => {
    return db.query('SELECT * FROM clientes');
};

const getClientesViajes = () => {
    return db.query('SELECT c.nombre, c.apellidos, c.email, v.fecha_salida, v.fecha_vuelta, h.nombre as "Hotel" FROM tbi_clientes_viajes as tbi JOIN clientes AS c ON c.id = tbi.fk_cliente JOIN viajes AS v ON v.id = tbi.fk_viaje JOIN hoteles AS h ON h.id = v.hotel_id')
}

const getById = (clientId) => {
    return db.query(' SELECT * FROM clientes WHERE id = ?', [clientId])
}

const create = ({ nombre, apellidos, direccion, email, telefono, fecha_nacimiento, dni }) => {
    return db.query(
        'INSERT INTO clientes (nombre, apellidos, direccion, email, telefono, fecha_nacimiento, dni) VALUES (?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, telefono, fecha_nacimiento, dni]);
};

const update = (clientId, { nombre, apellidos, direccion, email, telefono, fecha_nacimiento, dni }) => {
    return db.query(
        'UPDATE clientes SET nombre = ?, apellidos = ?, direccion = ?, email= ?, telefono = ?, fecha_nacimiento = ?, dni = ? WHERE id = ?', [nombre, apellidos, direccion, email, telefono, fecha_nacimiento, dni, clientId]
    )
}

const deleteById = (clientId) => {
    return db.query('DELETE FROM clientes WHERE id = ?', [clientId])
}





module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById,
    getClientesViajes
}