alert("Dia 2 exemplo 6 - functions void")

function add (num1:number, num2:number) : number{
    return num1 + num2
} // funcao para somar o preco 

function result (preco: number) {
    console.log("o resultado é " + preco)
} // neste exemplo como a funcao nao tem um retorno o tipo da funcao sempre ficara como void

result(add(5,5))

