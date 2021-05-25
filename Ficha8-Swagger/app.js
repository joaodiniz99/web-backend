const express = require('express');
const mysql = require('mysql');


const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: '1.0.0',
            title: 'Ficha 8 API',
            description: 'Ficha 8 API Information',
            contact: {
                name: 'TPSI-DWB'
            },
            servers: ['http://localhost.com:3000']
        },
        definitions: {
            'Person': {
                'type': 'object',
                'properties': {
                    'id': {
                        'type': 'integer',
                        'x-primary-key': true
                    },
                    'firstName': {
                        'type': 'string'
                    },
                    'lastName': {
                        'type': 'string'
                    },
                    'profession': {
                        'type': 'string'
                    },
                    'age': {
                        'type': 'integer',
                        'format': 'int64'
                    }
                }
            }
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

/**
 * @swagger
 * /persons:
 *    get:
 *      tags:
 *        - Person
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *                $ref: '#/definitions/Person'    
 */
app.get('/persons', (req, res) => {
    
    dbConnection.query('SELECT * FROM persons', (error, results, fields) => {
        if(error) {
            return res.status(404).send(error.message);
        }
        res.send(results);
    });

});

/**
 * @swagger
 * /persons:
 *    post:
 *      tags:
 *        - Person
 *      summary: Creates and stores a person
 *      description: Returns the id of the created person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Model
 *            description: Sample person
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              description: Successfully created
 */
app.post('/persons', (req, res) => {
    var details = req.body;

    dbConnection.query('INSERT INTO persons SET ?', [details] , (error, results, fields) => {
        if(error) {
            res.status(404).send(error.message);
        }
        res.send(results.insertId.toString());
    });

});

/**
 * @swagger
 * /persons:
 *    delete:
 *      tags:
 *        - Person
 *      summary: Deletes a person by id
 *      description: Deletes a single person by id
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Person's id
 *            in: body
 *            required: true
 *            type: integer
 *            schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              description: Successfully deleted
 */
app.delete('/persons', (req, res) => {
    var id = req.body.id;

    dbConnection.query('DELETE FROM persons WHERE id = ?', id, (error, results, fields) => {
        if(error) {
            res.status(404).send(error.message);
        }
        res.send("Deleted " + results.affectedRows + " entries");
    });
});

/**
 * @swagger
 * /persons/{id}:
 *    delete:
 *      tags:
 *        - Person
 *      summary: Deletes a person by id
 *      description: Deletes a single person by id
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Person's id
 *            in: path
 *            required: true
 *            type: string
 *            schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              description: Successfully deleted
 */
 app.delete('/persons/:id', (req, res) => {
    var id = req.params.id;

    dbConnection.query('DELETE FROM persons WHERE id = ?', id, (error, results, fields) => {
        if(error) { 
            res.status(404).send(error.message);
        }
        res.send("Deleted " + results.affectedRows + " entry(s)");
    });
});

/**
 * @swagger
 * /persons/{id}:
 *    get:
 *      tags:
 *        - Person
 *      summary: Gets a person
 *      description: Returns a person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Person's id
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *                $ref: '#/definitions/Person'
 */
app.get('/persons/:id', (req, res) => {
    var id = req.params.id;

    dbConnection.query('SELECT * FROM persons WHERE id = ?', id, (error, results, fields) => {
        if(error) {
            res.status(404).send(error.message);
        }

        if(results.length == 0) {
            res.status(404).send("ID not found!"); 
        } else {
            res.send(results);
        }
        
    });
});

/**
 * @swagger
 * /persons/{age}/{profession}:
 *    get:
 *      tags:
 *        - Person
 *      summary: Gets a list of persons
 *      description: Returns a list of persons with same age and profession
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: age
 *            description: Person's age
 *            in: path
 *            required: true
 *            type: integer
 *          - name: profession
 *            description: Person's profession
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *                $ref: '#/definitions/Person'    
 */
app.get('/persons/:age/:profession', (req, res) => {
    var age = req.params.age;
    var profession = req.params.profession;

    dbConnection.query('SELECT * FROM persons WHERE age = ? AND profession = ?',[age, profession], (error, results, fields) => {
        if(error) {
            res.status(404).send(error.message);
        }

        if(results.length == 0) {
            res.status(404).send("Users not found!"); 
        } else {
            res.send(results);
        }
    });
});

/**
 * @swagger
 * /persons/{id}:
 *    put:
 *      tags:
 *        - Person
 *      summary: Updates a person
 *      description: Returns a list of updated person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Person's id
 *            in: path
 *            required: true
 *            type: integer
 *          - name: Model
 *            description: Person's body
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *                $ref: '#/definitions/Person'    
 */
app.put('/persons/:id', (req, res) => {
    var id = req.params.id*1;
    var details = req.body;

    dbConnection.query('UPDATE persons SET ? WHERE id = ?',[details, id], (error, results, fields) => {
        if(error) {
            res.status(404).send(error.message);
        }

        if(results.length == 0) {
            res.status(404).send("ID not found!"); 
        } else {
            details = {
                id,
                ...details
            }
            res.send(details);
        }
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});