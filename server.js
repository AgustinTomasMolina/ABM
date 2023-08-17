const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000;
require('ejs')
const userRoutes = require('./routes/userRoutes');


//Settings
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

// Carpetas statics
app.use("/usuarios",express.static(path.join('./public')));
app.use(express.urlencoded({extended: true}));

//Middlewares
app.use(express.text());
app.use(express.json());
app.use(userRoutes);


app.listen(PORT, () => {
    console.log(`El servidor corre en: 
    http://localhost:${PORT}/usuarios`);
});