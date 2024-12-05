alert("Dia 3 exemplo 3 - literal type curso TS Udemy")


// jeito de associar valores literais a variaveis
// podemos definir diversos valores literais com o uso do union
let precoProduto: 20 | 40 | 60

let tamanhoProduto: 'P' | 'M' | 'G' | 'GG' 

precoProduto = 20
// precoProduto = 23 <- como o valor nao faz parte dos valores definido da variavel TS nao aceitara

tamanhoProduto = 'G'
// tamanhoProduto = 'Z' <- como o valor nao faz parte dos valores definido da variavel TS nao aceitara


