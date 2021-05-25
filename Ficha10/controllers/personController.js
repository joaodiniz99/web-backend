const PersonModel = require("../sequelize").Person;

exports.getPersons = (req, res, next) => {
    
    PersonModel.findAll()
        .then((persons) => {
            // res.send(persons);
            res.render('person', { title: 'Person', text: 'Lista de pessoas', persons: persons });
        })
};