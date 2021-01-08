const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


//expres HBS
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //res.send('Hola mundo')


    res.render('home', {
        nombre: 'Federico',
        anio: new Date().getFullYear()
    });
})


app.get('/about', (req, res) => {
    //res.send('Hola mundo')


    res.render('about', {
        anio: new Date().getFullYear()
    });
})


/*
app.get('/data', (req, res) => {
    //res.send('Hola mundo')

    let salida = {
        nombre: 'data',
        edad: 32,
        url: req.url
    }
    res.send(salida);
})*/

app.listen(port, () => {
    console.log(`escuchando peticiones ${port}`)
});