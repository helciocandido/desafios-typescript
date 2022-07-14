console.log("Hello world!");

// Como podemos melhorar o esse código usando TS?

interface Pessoa {
  nome: string;
  idade: number;
  profissao: string;
}

const pessoa1 = {} as Pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz";

let pessoa2 = {} as Pessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {} as Pessoa;
pessoa3.nome = "laura";
pessoa3.idade = 32;
pessoa3.profissao = "Atriz";

let pessoa4 = {} as Pessoa;
pessoa4.nome = "carlos";
pessoa4.idade = 19;
pessoa4.profissao = "padeiro";
