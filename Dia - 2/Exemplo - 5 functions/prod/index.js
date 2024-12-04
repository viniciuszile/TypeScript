"use strict";
alert("Dia 2 exemplo 5 - functions");
function add(num1, num2) {
    return num1 + num2;
} // neste exemplo estamos definindo o tipo de retorno como number mesmo o TS tendo a capacidade de detectar sozinho
function add2(num1, num2) {
    return num1 + num2;
} // neste exemplo mesmo nao definindo o tipo de saida, como os parametros foram denifinidos como numbers a saida sempre sera number
add(1, 2);
add2(4, 3);
