alert("Dia 2 exemplo 8- unknown");

let input: unknown; // Variável definida como tipo desconhecido, ou seja, pode ser qualquer tipo.
let nome: string;

input = 10; // A variável de tipo desconhecido pode receber números.
input = "abc"; // E também pode receber strings.

// nome = input; // Você não pode atribuir diretamente uma variável de tipo desconhecido a outra variável de tipo específico.

if (typeof input === "string") {
    nome = input; // Agora, após a verificação de tipo, a variável 'input' pode ser atribuída à 'nome', pois sabemos que é uma string.
    console.log(nome);
} // Para isso, é necessário verificar se o valor atual da variável de tipo desconhecido é do tipo compatível com a variável a ser atribuída.
