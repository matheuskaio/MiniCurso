//EXEMPLO DO BABEL

// alert("CHEGA DE OLÁ MUNDO");

// class Teste {}

//-------------------------------------------

REST;

const numeros = [1, 2, 3, 4];

const [a, b, ...c] = numeros;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, c) {
  return a + b + c;
}

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6));

//-------------------------------------------

SPREAD;

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const num3 = [...num1, ...num2];

console.log(num3);

const aluno = {
  nome: "Kaio",
  idade: 20,
  instituicao: "IFRN-NC"
};

const aluno2 = { ...aluno, nome: "Marcio" };

console.log(aluno2);

//-------------------------------------------

// Template Literals

// const nome = "Moisés";
// const time = "Flamengo";
// console.log("Meu nomé é " + nome + "e sou torcedor do " + time);
// console.log(`Meu nomé é ${nome} e sou torcedor do ${time}`);

//-------------------------------------------

// Object Short Syntax

// const nome = "Marcio";
// const idade = 24;

// const aluno = { nome: nome, idade: idade, instituicao: "IFRN-NC" };
// const aluno = { nome, idade, instituicao: "IFRN-NC" };

// console.log(aluno)

//-------------------------------------------
