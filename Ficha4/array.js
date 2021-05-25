var array = [];

array.push(function (i) {
  console.log("Hello World " + i);
});

for (let i = 1; i < 4; i++) {
  array[0](i);
}

console.log("============ForEach==========");

var array2 = [2, 3, 4, 5, 6];

function myFunction(e, i) {
  console.log("Element: " + e + " at index: " + i);
}

array2.forEach(myFunction);

console.log("======================");

array2.forEach((element, i) => {
  console.log("Element: " + element + " at index: " + i);
});
