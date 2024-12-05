alert("Dia 3 exemplo 2 - union curso TS Udemy")


// com esse tipo de funcao a gente pode receber numbers e str como entrada do usuario
// na hora de chamar a função

// metodo utilizado para input1 && input2 receber dois tipos de dados
function inputUsario(input1: number | string, input2: number | string, ){
    let resultado // armazena a soma de numeros ou str

    //metodo usado para verificar o tipo de dado recebido
    if(typeof input1 === "number" && typeof input2 === "number"){
        resultado = input1 + input2
    }
    else{
        // metodo usado para somar as strings
        resultado = input1.toString() + input2.toString() 
    }

    return resultado
}



const combinarNumero = inputUsario(1,2)
console.log(combinarNumero)

const combinarNome = inputUsario("Vini","Zile")
console.log(combinarNome)