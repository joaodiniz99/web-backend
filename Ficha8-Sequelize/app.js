const express = require('express');
const { Sequelize } = require('sequelize');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 3000 | 0;

/**
 * Middleware Functions
 */
app.use(express.json());
// JSON
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * Sequelize connection to Database
 */
const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });

/**
 * Define Persons Model
 */
const Person = sequelize.define('persons', {
    //attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profession: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

/**
 * Syncronize the Models with the Database
 */
sequelize.sync({ force: false })
    .then(() => {
        console.log("Database & tables created!");
    })/*
    .then(() => {
        return Person.findAll();
    })
    .then((persons) => {
        console.log(persons);
    });*/

/**
 * Insert multiple instances in bulk
 */
/*
Person.bulkCreate([
    {   firstName: 'Pedro', lastName: 'Jardim', profession: 'IT', age: 62   },
    {   firstName: 'Manuel', lastName: 'Matos', profession: 'IT', age: 12   },
    {   firstName: 'Pedro', lastName: 'Jardim', profession: 'IT', age: 32   },
    {   firstName: 'Ana', lastName: 'Duarte', profession: 'IT', age: 82   },
    {   firstName: 'Luís', lastName: 'Faria', profession: 'IT', age: 42   }
]);*/



/**
 * Get Persons a), e)
 */
app.get('/persons', (req, res) => {

    var id = req.query.id;

    if (id) {
        // e)
        Person.findByPk(id)
            .then(person => {
                //console.log(person);
                if(!person) {
                    res.status(404).send({ error: "Person not found!" });
                } else {
                    res.send(person);
                }
            })
            .catch(err => {
                res.status(404).send(err.sqlMessage);
            })
    } else {
        // a)
        Person.findAll()
            .then(persons => {
                res.send(persons);
            })
            .catch(err => {
                res.status(404).send(err.message);
            });
    }

});

/**
 * Create Person (Body) b)
 */
app.post('/persons', (req, res) => {
    var details = req.body;

    Person.create(details)
        .then(person => {
            res.send("Created Id -> " + person.id);
        })
        .catch(err => {
            res.status(404).send(err.sqlMessage);
        })
});

/**
 * Delete Person (Body) c)
 */
app.delete('/persons', (req, res) => {
    var id = req.body.id;

    Person.destroy({
        where: {
            id: id
        }
    })
        .then(count => {
            if (!count) {
                res.status(404).send({ error: "Person not found!" });
            } else {
                res.status(204).send();
            }
        })
        .catch(err => {
            res.status(404).send(err.sqlMessage);
        })
});

/**
 * Delete Person (Params) d)
 */
app.delete('/persons/:id', (req, res) => {
    var id = req.params.id;

    Person.destroy({
        where: {
            id
        }
    })
        .then(count => {
            if (!count) {
                res.status(404).send({ error: "Person not found!" });
            } else {
                res.status(204).send();
            }
        })
        .catch(err => {
            res.status(404).send(err.sqlMessage);
        });
});

/**
 * Get Person (Query)
 */
/*
app.get('/person', (req, res) => {
    var id = req.query.id;

    Person.findByPk(id)
        .then(person => {
            console.log(person);
            res.send(person);
        })
        .catch(err => {
            res.status(404).send(err.sqlMessage);
        })
});*/

/**
 * Get Persons Details - Age and Profession (Params) f)
 */
app.get('/persons/:age/:profession', (req, res) => {
    var age = req.params.age;
    var profession = req.params.profession;

    Person.findAll({
        where: {
            profession: profession,
            age: age
        }
    })
        .then((result) => {
            // console.log(result);
            if (!result) {
                res.status(404).send({ error: "Persons not found!" });
            } else {
                res.send(result);
            }
        })
        .catch((err) => {
            res.status(404).send(err.sqlMessage);
        });
});

/**
 * Update Person (Params and Body) g)
 */
app.put('/persons/:id', (req, res) => {
    var id = req.params.id;
    var details = req.body;

    Person.update(details, {
        where: {
            id: id
        },
    })
        .then((count) => {
            if(!count) {
                res.status(404).send({ error: 'Person not found!' });
            } else {
                details.id = id;
                res.send(details);
            }
        })
        .catch((err) => {
            res.status(404).send(err.sqlMessage);
        });
});


app.listen(port, () => {
    console.log("Server listening at port: " + port);
});



























/*
app.get('/users', (req, res) => {
    User.findAll()
        .then(users => {
            console.log(users);
        })
        .catch(err => {
            console.log(err);
        })
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
    } catch(err) {
        console.log(err);
    }
});*/