alert("Dia 3 exemplo 4 - intersectioncurso TS Udemy")

type funcionario = {
    nome: string,
    idade: number
}

type cargo = {
    id: number,
    funcao: string
}


// maneira de juntar o objeto/alias funcioario + cargo
type fun_cargo = funcionario & cargo



// desta maneira os 2 objetos sao associados e preenchidos en um unico objeto
const funcionario1: fun_cargo = {
    nome: 'zile',
    idade: 20,
    id: 1212,
    funcao: 'DBA'
}



console.log(funcionario1)