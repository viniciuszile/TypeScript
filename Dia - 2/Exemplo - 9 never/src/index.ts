alert("Dia 2 exemplo 9 - Never");

// A função 'geradorError' é declarada com o tipo de retorno 'never'.
// Isso significa que a função nunca irá retornar um valor, ela sempre irá lançar um erro ou entrar em um loop infinito.
function geradorError(messagem: string, codigo: number): never {
    // A função lança um erro com uma mensagem personalizada e um código de erro.
    throw { message: messagem, errorCode: codigo };
}

// Aqui estamos chamando a função 'geradorError' passando uma mensagem e um código.
// Como a função lança um erro, o código seguinte (console.log) nunca será executado.
geradorError("deu xabu", 13);

// Este console.log nunca será executado, pois a função 'geradorError' lança um erro antes disso.
console.log(geradorError("deu xabu", 13));
