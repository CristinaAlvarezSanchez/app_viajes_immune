const getAll = () => {
    return db.query('SELECT * FROM hoteles');
}

const getById = (hotelId) => {
    return db.query('SELECT * FROM hoteles WHERE id = ?', [hotelId])
}

const create = ({ nombre, direccion, ciudad, estrellas, descripcion, tarifa }) => {
    return db.query(
        'INSERT INTO hoteles (nombre, direccion, ciudad, estrellas, descripcion, tarifa) VALUES (?, ?, ?, ?, ?, ?)', [nombre, direccion, ciudad, estrellas, descripcion, tarifa]);
};

const update = (hotelId, { nombre, direccion, ciudad, estrellas, descripcion, tarifa }) => {
    return db.query('UPDATE hoteles SET nombre = ?,  direccion = ?, ciudad = ?, estrellas = ?, descripcion = ?, tarifa = ? WHERE id = ?', [nombre, direccion, ciudad, estrellas, descripcion, tarifa, hotelId])
}

const deleteById = (hotelId) => {
    return db.query('DELETE FROM hoteles WHERE id = ?', [hotelId])
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
}