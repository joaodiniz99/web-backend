// importar o express
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

/**
 * 
 * FUNÇÕES UTEIS
 * 
 */
// função para ler um ficheiro com o caminho passado como argumento, de forma síncrona
function readFileSync(path) {
  var content = fs.readFileSync(path);
  return content;
}

function writeFileSync(path, data) {
  fs.writeFileSync(path, data);
}


// criar uma instancia do express
const app = express();

// definir a porta do servidor http
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Hello Postman!');
});

// list all users endpoint i)
app.get('/users', (req, res) => {
  var persons = readFileSync('./persons.json');
  res.send(JSON.parse(persons));
});

// add a user endpoint ii)
app.post('/users', (req, res) => {

  var persons = JSON.parse(readFileSync('./persons.json'));

  var length = Object.keys(persons).length;
  var id = ++length;

  var newPerson = {
    id,
    ...req.body
  };
  // console.log(newPerson);

  persons[`person${id}`] = newPerson;

  writeFileSync('./persons.json', JSON.stringify(persons));// a sobrepor o novo objeto com a nova pessoa dentro do ficheiro persons.json para poder atualizar

  // console.log(persons);
  res.send(persons);
});

// delete a user endpoint iii) usando body({ id: 3})
app.delete('/users', (req, res) => {
  var persons = JSON.parse(readFileSync('./persons.json'));
  var id = req.body.id;

  var person = persons[`person${id}`];
  if(person != undefined) {
    delete persons[`person${id}`];// a apagar a pessoa
    writeFileSync('./persons.json', JSON.stringify(persons));
    res.send(persons);// a enviar a lista atualizada sem a pessoa removida
  } else {
    res.send("Id inexistente");
  }
});

// delete a user endpoint iii) usando parametros(/:id)
app.delete('/users/:id', (req, res) => {
  var persons = JSON.parse(readFileSync('./persons.json'));
  var id = req.params.id;

  var person = persons[`person${id}`];
  if(person != undefined) {
    delete persons[`person${id}`];// a apagar a pessoa
    writeFileSync('./persons.json', JSON.stringify(persons));
    res.send(persons);// a enviar a lista atualizada sem a pessoa removida
  } else {
    res.send("Id inexistente");
  }
});

// list details of 1 person iv) usando parametros(/:id)
app.get('/users/:id', (req, res) => {
  var persons = JSON.parse(readFileSync('./persons.json'));
  var id = req.params.id;

  var person = persons[`person${id}`];
  if(person != undefined) {
    res.send(person);// a enviar a pessoa
  } else {
    res.send("Id inexistente");
  }

});

// update info of 1 person v) usando parametros(/:id)
app.put('/users/:id', (req, res) => {
  var persons = JSON.parse(readFileSync('./persons.json'));
  var id = req.params.id;

  var person = persons[`person${id}`];
  if(person != undefined) {
    persons[`person${id}`] = req.body;
    persons[`person${id}`].id = id;
    
    writeFileSync('./persons.json', JSON.stringify(persons));
    res.send(persons[`person${id}`]);// a enviar a pessoa
  } else {
    res.send("Id inexistente");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
