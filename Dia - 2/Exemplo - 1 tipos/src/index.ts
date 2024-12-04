alert("Dia 2 exemplo 1 - tipos")

let price = 40

let item =  "maça"

let instore = true


// obs sobre o trecho abaixo
let value // tipo any

value = 0
value = "zile"

// so conseguimos mudar o tipo da variavel "value" de int 0 para str zile 
// devido a variavel inicialmente ter sido declarada sem atribuicao ou declarada como any

// obs sobre o trecho abaixo
// let value2 = 0

// value2 = "zile"

// o trecho acima é considerado errado pelo propio TS devido a variavel value2 
// ja ter sido declarada como 0 tipo int e por isso não pode ser convertida para str zile