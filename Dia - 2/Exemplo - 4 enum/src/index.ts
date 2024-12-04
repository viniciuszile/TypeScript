alert("Dia 2 exemplo 4 - enum")

// const adm = 1
// const dba = 2
// const driver = 3

enum Funcao {adm = 1, dba = 2, driver = 3}

const funcionario = {
    nome: "zile",
    idade: 20,
    funcao: Funcao.dba
}

console.log(funcionario)