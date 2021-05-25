var person = {
  name: "Diniz",
  age: 21,
  gender: "male",
};

var personAsJson = JSON.stringify(person);

console.log(personAsJson);

var personAsObject = JSON.parse(personAsJson);

console.log(personAsObject.name);

//==========================================================

var Emitter = require("./emitter.js");
var constants = require("./config.js");

var emitter = new Emitter();

emitter.on(constants.events.LOGIN, function () {
  console.log("O evento login 1 foi despoletado");
});
emitter.on(constants.events.LOGIN, function () {
  console.log("O evento login 2 foi despoletado");
});

emitter.on(constants.events.LOGOUT, function () {
  console.log("O evento logout foi despoletado");
});

emitter.emit(constants.events.LOGIN);
emitter.emit(constants.events.LOGOUT);

//==========================================================
