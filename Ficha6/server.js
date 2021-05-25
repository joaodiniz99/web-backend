const express = require("express");
const fs = require("fs");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * MIDDLEWARE FUNCTION
 */
app.use((req, res, next) => {
    fs.appendFileSync('./log.txt', `${req.path}, ${req.method}: ${new Date()} \n`);
    next();
})

app.get('/', (req, res) => {
    // var body = "<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>";
    // var file = fs.readFileSync('./index.html');
    var file = fs.readFileSync('./index.html', 'utf8');
    var data = new Date();
    file = file.replace('{date}', data.toLocaleDateString());
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(file),
        'Content-Type': 'text/html'
    });
    
    res.end(file);
});

/**
 * Route params
 */
app.get('/user/:name', (req, res) => {

    var file = fs.readFileSync('./index.html', 'utf8');
    var name = req.params.name;
    file = file.replace('{name}', name);
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(file),
        'Content-Type': 'text/html'
    });
    
    res.end(file);
});

/**
 * Route query
 */
app.get('/user', (req, res) => {

    var file = fs.readFileSync('./index.html', 'utf8');
    var name = req.query.name;
    var profession = req.query.profession;
    file = file.replace('{name}', name);
    file = file.replace('{profession}', profession);
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(file),
        'Content-Type': 'text/html'
    });
    
    res.end(file);
});

app.get('/log', (req, res) => {

    var file = fs.readFileSync('./log.txt', 'utf-8');
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(file),
        'Content-type': 'text/plain'
    });

    res.end(file);
});

app.get('/log.txt', (req, res) => {
    res.download('./log.txt', (err) => {
        if(err) {
            res
                .status(404)
                .send("Ocorreu um erro ao ler o ficheiro. " + err.message);
        } else {
            // ENCONTROU O FICHEIRO COM SUCESSO
        }
    });
});

app.get('/clear', (req, res) => {

    fs.unlink('./log.txt', (err) => {
        if(err) {
            res
                .status(404)
                .send("Ocorreu um erro ao ler o ficheiro. " + err.message);
        } else {
            res.send("File deleted");
        }
    });
});

app.listen(port, () => {
    console.log('Servidor à escuta');

    fs.open('./log.txt', 'a', (err, fd) => {
        console.log("File was created " + fd);
    });
});