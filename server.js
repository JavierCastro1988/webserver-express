//Contantes para usar express
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers'); // Me traigo los helpers

const port = process.env.PORT || 3000; // Configuracion de puerto para heroku porque no sabemos donde correra en otra maquina

// __dirname toma todo el directorio en el que se encuentra el usaurio y lo concatena con lo que indiquemos
// Sitio estatico que se mostrara, en este caso la carpeta public
app.use(express.static(__dirname + '/public'));

// Express HBS engine para plantillas
hbs.registerPartials(__dirname + '/views/parciales'); // esto es para usar los parciales como el head, menu y footter
app.set('view engine', 'hbs'); // Declaramos el uso de las plantillas



app.get('/', (req, res) => { // Renderiza a home y usa las variables

    res.render('home', {
        nombre: 'javier'
    });

});

app.get('/about', (req, res) => { // Renderiza a about y usa la fecha para el footer

    res.render('about');

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});