const router = require('express').Router();
const {agregarUsuario} = require('../controllers/userController');
const sql = require('mssql');

router.post('/usuarios', agregarUsuario);


module.exports = router;
