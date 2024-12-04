"use strict";
alert("Dia 2 exemplo 4 - enum");
// const adm = 1
// const dba = 2
// const driver = 3
var Funcao;
(function (Funcao) {
    Funcao[Funcao["adm"] = 1] = "adm";
    Funcao[Funcao["dba"] = 2] = "dba";
    Funcao[Funcao["driver"] = 3] = "driver";
})(Funcao || (Funcao = {}));
const funcionario = {
    nome: "zile",
    idade: 20,
    funcao: Funcao.dba
};
console.log(funcionario);
