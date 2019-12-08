const events = require('events');

let event = new events();

//event.once('saute', (a, n) execute que une fois
event.once('saute', (a, n) => {
    console.log('sauté', a, n);
})

event.emit('saute', 12, 44)
event.emit('saute', 12, 44)
event.emit('saute', 12, 44)




/*
const http = require('http');
let fs = require('fs')
const serveur = http.createServer()
let url = require('url')

 serveur.on('request', (req, res) => {
    res.writeHead(200)
    let query = url.parse(req.url, true).query
    let nom = query.name === undefined ? 'anonyme' : query.name;


    fs.readFile('./index.html', 'utf-8', (err, file) => {
            if (err) {
                res.writeHead(404, { 'content-type': 'text/html; charset = utf-8' })
                res.end('error')
            } else {

                res.writeHead(200, { 'content-type': 'text/html; charset = utf-8' })
                file = file.replace('{{name}}', nom)
                res.end(file) // renvois le fichier en paramettre
            }

        })
        // je veux que tu cree un serveur et apres tu execute ce code
})

serveur.listen(45) */