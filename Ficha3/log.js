var log = "Hello Module!";

var obj = {
  message: "Hello Message",
  functionObj: function(info) {
    return "This function outputs " + info;
  }
}


var testFunction = function() {
  return "Hello Function";
}

function FF() {
  console.log("FF");
}

var text = "Hello text";

// module.exports = {testFunction, log};
module.exports = obj;