const hbs = require('hbs');

hbs.registerHelper('getAnio', () => { // Uso de helpers para la fecha
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => { // Uso de helpers para capitalizar
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});