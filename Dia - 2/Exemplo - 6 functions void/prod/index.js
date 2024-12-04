"use strict";
alert("Dia 2 exemplo 6 - functions void");
function add(num1, num2) {
    return num1 + num2;
} // neste exemplo estamos definindo o tipo de retorno como number mesmo o TS tendo a capacidade de detectar sozinho
function result(price) {
    console.log("o resultado é " + price);
} // neste exemplo mesmo nao definindo o tipo de saida, como os parametros foram denifinidos como numbers a saida sempre sera number
result(add(5, 5));
