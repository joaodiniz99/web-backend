// ALÍNEA 1
// inputs? Peso e altura

// Outputs? imc

// assinatura da função --> cabeçalho
function calculateIMC(weight, height) {
  var imc = weight / Math.pow(height, 2);
  return Math.round(imc);
}

function logIMC(weight, height) {
  var imc = calculateIMC(weight, height);
  if (imc < 18.5) {
    console.log("IMC: " + imc + "- Está abaixo do peso!");
  } else if (imc >= 18.5 && imc < 25) {
    console.log("IMC: " + imc + " - Está no peso normal");
  } else if (imc >= 25 && imc < 30) {
    console.log("IMC: " + imc + " - Está acima do peso");
  } else {
    console.log("IMC: " + imc + " - Está obeso!");
  }
}

// invocação da função com argumentos e atribuição a variável
var imc = calculateIMC(80, 2); // Aqui guarda-se o resultado

// imprimir o resultado na consola
// console.log(imc); // Pra correr o exercício, descomentar esta linha

// console.log(calculateIMC(80, 2)); // Aqui não se guarda o resultado, que é igual ao que está acima

// logIMC(200, 2); // Pra correr o exercício, descomentar esta linha

// ALÍNEA 2

function invertWord(str) {
  var inv = "";
  for (let index = str.length - 1; index >= 0; index--) {
    inv += str[index];
  }
  return inv;
}

function invertString(str, pattern) {
  var inv = "";
  var split = str.split(pattern);
  for (let index = 0; index < split.length; index++) {
    var word = invertWord(split[index]);
    // inv += word + " "; // Também pode-se descomentar
    inv += word + pattern;
  }
  return inv;
}

// var invertedString = invertString("Hoje,é,Domingo", ",");  // Desbloquear estas 2 linhas, para a alínea correr
// console.log(invertedString);

// var split = "Hoje é Domingo".split(" ");

// var word = invertString(split[0]);
// ["Hoje", "e", "Domingo"];
// console.log(word);

// ALÍNEA 3

// Contar as consoantes é a parte
function countConsonants(str) {
  var count = 0;
  var vogals = ["a", "e", "i", "o", "u"];

  for (let index = 0; index < str.length; index++) {
    for (let j = 0; j < vogals.length; j++) {
      if (str[index] != vogals[j]) {
        count++;
      }
    }
  }
}

function countVogals(str) {
  var count = 0;
  // var vogals = ["a", "e", "i", "o", "u"];

  // for (let index = 0; index < str.length; index++) {
  //     for (let j =0; j < vogals.length; j++) {
  //         if (str[index] == vogals[j]) {
  //             count++;
  //         }
  //     }
  // }

  for (let index = 0; index < str.length; index++) {
    if (
      str[index] == "a" ||
      str[index] == "e" ||
      str[index] == "i" ||
      str[index] == "o" ||
      str[index] == "u"
    ) {
      count++;
    }
  }
  return count;
}

var vogals = countVogals("Hello");
console.log(vogals);

// ALÍNEA 4

function countLetter(str, letter) {
  str = str.toLowerCase();
  var count = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] == letter) {
      count++;
    }
  }
  return count;
}

var count = countLetter("hELLe", "e");
console.log(count);

// ALÍNEA 5

function calculateWorking(he, me, se, hs, ms, ss) {
  if (he < 8 || hs > 18) {
    console.log("Horário não permitido!");
    return;
  }

  var enterInSeconds = he * 3600 + me * 60 + se;
  var exitInSeconds = hs * 3600 + ms * 60 + ss;

  var timeInSeconds = exitInSeconds - enterInSeconds;

  var remainderHour = timeInSeconds % 3600;
  var hours = (timeInSeconds - remainderHour) / 3600;
  var remainderMinutos = remainderHour % 60;
  var minutes = (remainderHour - remainderMinutos) / 60;

  console.log(
    "Tempo de trabalho: " + hours + ":" + minutes + ":" + remainderMinutos
  );
}

// calculateWorking(8,35,0,16,0,30);

// ALÍNEA 6
function drawRectangle(width, height) {
  for (let j = 0; j < height; j++) {
    var line = "";
    for (let i = 0; i < width; i++) {
      line += "*";
    }
    console.log(line);
  }
}

// drawRectangle(5,5);

// ALÍNEA 7
function drawTriangle(height) {
  var line = "";
  for (let i = 0; i < height; i++) {
    line += "*";
    console.log(line);
  }
}

// drawTriangle(10);

// ALÍNEA 8
function drawBox(width, height) {
  for (let j = 0; j < height; j++) {
    var line = "";
    for (let i = 0; i < width; i++) {
      if (j == 0 || j == height - 1 || i == 0 || i == width - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// drawBox(10, 10);

// ALÍNEA 9
var student1 = {
  firstName: "João",
  lastName: "Diniz",
  age: 21,
  grade: 16.5,
  getGrade: function () {
    return `O aluno ${this.firstName + " " + this.lastName} teve nota: ${
      this.grade
    }`;
  },
};
var student2 = {
  firstName: "Ana",
  lastName: "Damásio",
  age: 23,
  grade: 20,
  getGrade: function () {
    return `O aluno ${this.firstName + " " + this.lastName} teve nota: ${
      this.grade
    }`;
  },
};
var student3 = {
  firstName: "Raquel",
  lastName: "Silva",
  age: 44,
  grade: 18,
  getGrade: function () {
    return `O aluno ${this.firstName + " " + this.lastName} teve nota: ${
      this.grade
    }`;
  },
};
var student4 = {
  firstName: "Alexandre",
  lastName: "Dumas",
  age: 19,
  grade: 19,
  getGrade: function () {
    return `O aluno ${this.firstName + " " + this.lastName} teve nota: ${
      this.grade
    }`;
  },
};
var student5 = {
  firstName: "Dumas",
  lastName: "Diniz",
  age: 68,
  grade: 17,
  getGrade: function () {
    return `O aluno ${this.firstName + " " + this.lastName} teve nota: ${
      this.grade
    }`;
  },
};

var studentsList = [];

studentsList.push(student1);
studentsList.push(student2);
studentsList.push(student3);
studentsList.push(student4);
studentsList.push(student5);

// Function to display each students grade (a)
function listGrades(array) {
  for (let i = 0; i < array.length; i++) {
    const student = array[i];
    console.log(student.getGrade());
  }
}

// listGrades(studentsList);

// Function to get the best grade (b)
function getBestGrade(array) {
  var student = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].grade > student.grade) {
      student = array[i];
    }
  }
  return student;
}

// var bestGradeStudent = getBestGrade(studentsList);
// console.log("Melhor aluno:");
// console.log(bestGradeStudent.getGrade());

// Function to get the lowest grade (c)
function getLowestGrade(array) {
  var student = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].grade < student.grade) {
      student = array[0];
    }
  }
  return student;
}

// var lowestGradeStudent = getLowestGrade(studentsList);
// console.log("Pior aluno:");
// console.log(lowestGradeStudent.getGrade());

// Function to get average grade
function getAverage(array) {
  var average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i].grade;
  }
  average = average / array.length;
  return average;
}

function getClosestFromAverage(array) {
  var average = getAverage(array);
  var min = array[0];
  var index = 0;
  for (let i = 0; i < array.length; i++) {
    const grade = array[i].grade;
    var diff = Math.abs(average - grade);
    if (diff < min) {
      min = diff;
      index = i;
    }
  }
  return array[index];
}
