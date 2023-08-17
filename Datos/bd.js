const sql = require("mssql");

var config = {
    user: 'adm',
    password: '12345',
    server: 'PC-DAMOLINA\\SQLEXPRESS',
    database: 'Usuarios',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

async function testConnection() {
    try {
        const pool = await sql.connect(config);
        console.log('Conexión exitosa a la base de datos.');
        return pool;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        throw error
    }
    
}


module.exports = {testConnection};