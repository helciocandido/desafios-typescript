console.log("Hello world!");

// Como podemos rodar isso em um arquivo .ts sem causar erros?
// let employee = {};
// employee.code = 10;
// employee.name = "John";

//Resposta 01 e 02
interface Employee {
  name: string;
  code: number;
}

//01
const funcionario1: Employee = {
  name: "John",
  code: 0,
};

//02
const funcionario3Obj = {} as Employee;
funcionario3Obj.name = "Natasha";
funcionario3Obj.code = 3;
/****************************************************/

// Resposta 03
const funcionario2 = {
  name: "Jorge",
  code: 1,
};
/****************************************************/

// Resposta 04
const funcionario3: { name: string; code: number } = {
  name: "Maria",
  code: 2,
};
/****************************************************/
