var express = require('express');
var router = express.Router();
var personController = require("../controllers/personController");

/* GET users listing. */
router.get('/', personController.getPersons);

/* Create new person */
router.post('/', personController.createPerson);

/* Update person */
router.put('/:id', personController.updatePerson);
module.exports = router;
