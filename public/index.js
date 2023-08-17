const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const ciudad = document.getElementById("ciudad");
const localidad = document.getElementById("localidad");
const zip = document.getElementById("zip");
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (event) => {

    event.preventDefault()

    const formData = new FormData(formulario)

    const data = {
        nombre: formData.get('nombre'),
        apellido: formData.get('apellido'),
        email: formData.get('email'),
        ciudad: formData.get('ciudad'),
        localidad: formData.get('localidad'),
        zip: formData.get('zip')
    }

    try {
        const response = await fetch('http://localhost:3000/usuarios/', { // Endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Datos que se envian en formato JSON
            },
            body: JSON.stringify(data) // Le da los datos al cuerpo, donde data contiene el formulario en formato JSON
        });
        console.log(data)

        if (response.ok) {
            const result = await response.text(); // Convierte el texto lo que recibio por parte del servidor 

            alert(result); // Mostrar el mensaje de éxito en una alerta

        } else {

            alert('Error al insertar los datos.'); // Mostrar el mensaje de error en una alerta
        }

        formulario.reset();

    } catch (error) {
        alert('Error en la conexión con el servidor.', error.message); // Mostrar el mensaje de error de conexión en una alerta
    }
});