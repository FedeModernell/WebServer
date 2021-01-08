const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();

}).listen(8088);

console.log('Escuchando puerto 8088');