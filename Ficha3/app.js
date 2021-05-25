function started() {
  console.log("Started Download");
}

function update(value) {
  // for (let i = 0; i <= 100; i++) {
  //   console.log(i + "% of Download");
  // }
  console.log(value + "% of Download");
}

function completed() {
  console.log("Completed Download");
}

function performDownload(f1,f2,f3) {
  f1();// started()
  for (let i = 0; i <= 100; i++) {
    f2(i);// update(value)
  }
  f3();// completed()
}

// performDownload(started, update, completed);

//=====================================================================
var log = require("./log");

// log();

// console.log(log.testFunction());

// console.log(log.log);

// console.log(log.message);
// console.log(log.functionObj("Hello"));

// EX4
var arrayUtils = require("./ArrayUtils");

// a)
// var array;
// var array = null;
// var array = [];
// console.log("O array está vazio? " + arrayUtils.isEmpty(array));


var array = [23, 44, 53, 78, 80, 100];
// var array = [];
// b)
console.log("O valor máximo do array é: " + arrayUtils.max(array));// 100

// c)
console.log("O valor mínimo do array é: " + arrayUtils.min(array));// 23

// d)
console.log("A média dos valores do array é: " + arrayUtils.average(array));// 63

// e)
var value = 44;
// var value = 69;
console.log("O índice do valor " + value + " é: " + arrayUtils.indexOf(array, value));// 1

// f)
var subArray = arrayUtils.subArray(array, 3, 5);
console.log("O sub-array é: " + subArray);// [78, 80, 100]

// g)
var array2 = [0, 1, 2, 3, 4, 5];
var sameSize = arrayUtils.isSameLength(array, array2);
console.log("Os arrays são do mesmo tamanho: " + sameSize);// true

// h)
var invertedArray = arrayUtils.reverse(array);
console.log("O array invertido é: " + invertedArray);// [100, 80, 78, 53, 44, 23]

// i)
var swappedArray = arrayUtils.swap(array, 0, 2);
console.log("O array alterado é: " + swappedArray);// [53, 44, 23, 78, 80, 100]

// j)
console.log("O array contém o valor:" + value + "? " + arrayUtils.contains(array, value));// true

// k)
var array3 = [21, 23];
var concatenedArray = arrayUtils.concat(array, array3);
console.log("O array concatenado é: " + concatenedArray);// [23, 44, 53, 78, 80, 100, 21, 23]