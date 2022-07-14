"use strict";
console.log("Hello world!");
// Como podemos melhorar o esse código usando TS?
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
    Trabalho[Trabalho["Professor"] = 2] = "Professor";
})(Trabalho || (Trabalho = {}));
const pessoa1 = {};
pessoa1.nome = "Maria";
pessoa1.idade = 29;
pessoa1.profissao = Trabalho.Atriz;
let pessoa2 = {};
pessoa2.nome = "Roberto";
pessoa2.idade = 19;
pessoa2.profissao = Trabalho.Professor;
let pessoa3 = {};
pessoa3.nome = "Laura";
pessoa3.idade = 32;
pessoa3.profissao = Trabalho.Atriz;
let pessoa4 = {};
pessoa4.nome = "Carlos";
pessoa4.idade = 19;
pessoa4.profissao = Trabalho.Padeiro;
