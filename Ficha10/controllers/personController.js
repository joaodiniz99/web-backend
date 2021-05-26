const PersonModel = require("../sequelize").Person;

exports.getPersons = (req, res, next) => {
    
    PersonModel.findAll()
        .then((persons) => {
            // res.send(persons);
            res.render('person/index', { title: 'Person', text: 'Lista de pessoas', persons: persons });
        })

};

exports.createPerson = (req, res, next) => {
    // console.log(req.body);

    PersonModel.create(req.body)
        .then(result => {
            res.redirect('/person');
        })
        .catch(err => {
            console.log("Error: ",err);
        });
};

exports.updatePerson = (req, res, next) => {
    
};