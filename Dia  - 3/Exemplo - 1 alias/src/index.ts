alert("Dia 3 exemplo 1 - alias curso TS Udemy")



// neste exemplos o alias seria o "Usarios" com isso 
// a cada novo objeto "usuario" criado nao ser nescessario definir os tipos novamente apenas atribuir o alias

type Usarios = {
    nome: string,
    idade: number,
}

const usuario: Usarios = {
    nome: "zile",
    idade: 20,
}



// exeplo antigo definindo os tipos sem o uso de alias
const users:{
    nome: string,
    idade: number
} = {
    nome: 'zile',
    idade: 20,
}

console.log(usuario)

console.log(users)