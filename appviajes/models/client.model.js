const getAll = () => {
    return db.query('SELECT * FROM clientes')
};







module.exports = {
    getAll
}