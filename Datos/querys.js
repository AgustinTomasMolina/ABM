const query = {
        getAllUsers:'SELECT Nombre, Apellido, Ciudad FROM Usuarios',
        insertIntoUsers:'INSERT INTO Users (Nombre, Apellido, Ciudad, Localidad, Zip, Email) VALUES (@nombre, @apellido, @ciudad, @localidad, @zip, @email )'
    }  

module.exports = query;
