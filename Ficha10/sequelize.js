const Sequelize = require("sequelize");
const PersonModel = require("./models/Person");

// Criação da ligação à BD
const sequelize = new Sequelize('ficha10', 'root', 'rootPassword321', {
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// Models
const Person = PersonModel(sequelize, Sequelize);

// Autenticação à BD
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch((err) => {
        console.log("Unable to connect", err);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log("Database & tables created!")});


// Person.bulkCreate([
//     {   firstName: 'Pedro', lastName: 'Jardim', profession: 'IT', age: 62   },
//     {   firstName: 'Manuel', lastName: 'Matos', profession: 'IT', age: 12   },
//     {   firstName: 'Pedro', lastName: 'Jardim', profession: 'IT', age: 32   },
//     {   firstName: 'Ana', lastName: 'Duarte', profession: 'IT', age: 82   },
//     {   firstName: 'Luís', lastName: 'Faria', profession: 'IT', age: 42   }
// ]);

// Exportar os modelos
module.exports = {
    Person
}
