 const sql = require('mssql');
const {testConnection} = require('../Datos/bd');
const queries = require('../Datos/querys');

 
 async function mostrarFormulario(req,res, next) {
    const pool = await sql.connect(dbConfig);

    const {nombre, apellido, ciudad} = req.body;

    const result = await pool.request().query('SELECT Nombre, Apellido, Ciudad FROM Usuarios')
    console.log(result.recordset);

}   

async function agregarUsuario (req, res) {
    try {
        const pool = await testConnection();

        const { nombre, apellido, ciudad, localidad, zip, email } = req.body;

        const request = pool.request();

        await request
            .input('nombre', sql.VarChar, nombre)
            .input('apellido', sql.VarChar, apellido)
            .input('email', sql.VarChar, email)
            .input('ciudad', sql.VarChar, ciudad)
            .input('localidad', sql.VarChar, localidad)
            .input('zip', sql.Int, zip)
            .query(queries.insertIntoUsers);

        res.status(200).send('Usuario agregado correctamente');
    } catch (error) {
        console.error('Error al agregar usuario:', error.message);
        res.status(500).send('Error interno del servidor');
    }
};

module.exports = {
    agregarUsuario,
    mostrarFormulario
}