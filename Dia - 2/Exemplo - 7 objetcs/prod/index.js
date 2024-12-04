"use strict";
alert("Dia 2 exemplo 7- objetcs");
const user = {
    nome: "zile",
    idade: 20,
    sexo: "m",
}; // desta maneira o TS consegue automaticamente indetificar o tipo de cada propieade como por exemplo nome = str
const user2 = {
    Nome: "zile",
    Idade: 20,
    Sexo: "m"
}; // voce tambem pode definir de forma manual os tipos para casos especificos
