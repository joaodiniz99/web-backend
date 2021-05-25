var a = 10;
var b = 5;

var c = a + b;

// console.log(c);

// Ex5

/* Versão do professor */
var miniProj = 16;
var freq = 10;
var projFinal = 12;

var notaFinal = miniProj * 0.3 + freq * 0.3 + projFinal * 0.4;

console.log(`A avaliação final é: ${Math.round(notaFinal, 2)}`);

/* Minha versão */
// const notaFinal = (notaPratica, notaTeorica) => {
//   media = (notaPratica + notaTeorica) / 2;
//   console.log(`Média: ${media}`);
//   if(media >= 9.5 && media <= 20) {
//     console.log("aprovado!");
//   } else {
//     console.log("reprovado...");
//   }
// }

// notaFinal(17, 10); //Aprovado
// notaFinal(9, 8); //Reprovado

// Ex6
const nomeMes = (numero) => {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  // if (!!meses[--numero]) {
  //   console.log(meses[numero]);
  // } else {
  //   console.log("Mês inválido");
  // }
  if (meses[numero - 1] == undefined) {
    console.log("Mês inválido");
  } else {
    console.log(meses[numero - 1]);
  }
  // let mes = '';
  // switch (numero) {
  //   case 1:
  //     mes = 'Janeiro';
  //     break;
  //   case 2:
  //     mes = 'Fevereiro';
  //     break;
  //   case 3:
  //     mes = 'Março';
  //     break;
  //   case 4:
  //     mes = 'Abril';
  //     break;
  //   case 5:
  //     mes = 'Maio';
  //     break;
  //   case 6:
  //     mes = 'Junho';
  //     break;
  //   case 7:
  //     mes = 'Julho';
  //     break;
  //   case 8:
  //     mes = 'Agosto';
  //     break;
  //   case 9:
  //     mes = 'Setembro';
  //     break;
  //   case 10:
  //     mes = 'Outubro';
  //     break;
  //   case 11:
  //     mes = 'Novembro';
  //     break;
  //   case 12:
  //     mes = 'Dezembro';
  //     break;
  //   default:
  //     break;
  // }
  // console.log(mes);
};

nomeMes(1); //Janeiro
nomeMes(5); //Maio
nomeMes(6); //Junho
nomeMes(12); //Dezembro

// Ex7
const operacao = (num, num2, operacao) => {
  if (operacao == "^") {
    console.log(`Operação ${operacao}: ${Math.pow(num, num2)}`);
  } else {
    console.log(`Operação ${operacao}: ${eval(num + operacao + num2)}`);
  }
};

operacao(2, 4, "*");
operacao(2, 4, "+");
operacao(2, 4, "-");
operacao(2, 4, "/");
operacao(2, 4, "^");

// Ex8
var i = 0;

while (i <= 20) {
  if (i % 5 == 0) {
    // console.log(i);
  }
  i++;
}

for (let j = 0; j < 20; j++) {
  if (j % 5 == 0) {
    // console.log(j);
  }
}

// Ex9
var sum = 0;

for (let j = 0; j <= 100; j++) {
  sum += j;
}

// console.log(sum);

// Ex10
var fact = 1;

for (let j = 1; j <= 3; j++) {
  fact *= j;
}

console.log(fact);

// Ex11
var array = [1, 4, 5, 7, 0, 12];

/* MÁXIMO */
var max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] >= max) {
    max = array[i];
  }
}
console.log("Número máximo: " + max);

/* MÍNINMO */
var min = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] <= min) {
    min = array[i];
  }
}
console.log("Número mínimo: " + min);

/* MÉDIA */
var media = 0;
for (let i = 0; i < array.length; i++) {
  media += array[i];
}
media = media / array.length;
console.log("Média: " + Math.round(media));
