console.log("Hello world!");

// Como podemos melhorar o esse código usando TS?

enum Trabalho {
  "Atriz",
  "Padeiro",
  "Professor",
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao: Trabalho;
}

const pessoa1 = {} as Pessoa;
pessoa1.nome = "Maria";
pessoa1.idade = 29;
pessoa1.profissao = Trabalho.Atriz;

let pessoa2 = {} as Pessoa;
pessoa2.nome = "Roberto";
pessoa2.idade = 19;
pessoa2.profissao = Trabalho.Professor;

let pessoa3 = {} as Pessoa;
pessoa3.nome = "Laura";
pessoa3.idade = 32;
pessoa3.profissao = Trabalho.Atriz;

let pessoa4 = {} as Pessoa;
pessoa4.nome = "Carlos";
pessoa4.idade = 19;
pessoa4.profissao = Trabalho.Padeiro;
