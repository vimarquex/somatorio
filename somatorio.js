// Função para calcular o somatório de números divisíveis por 3 ou 5
function somatorioDivisiveis3ou5(numero) {
    let soma = 0;
    for (let i = 3; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}

// Verifica se foi fornecido um argumento na linha de comando
if (process.argv.length !== 3) {
    console.log('Por favor, forneça um número como argumento da linha de comando.');
} else {
    // Obtém o número fornecido como argumento da linha de comando
    const numeroInformado = parseInt(process.argv[2], 10);

    // Chama a função e exibe o resultado
    const resultado = somatorioDivisiveis3ou5(numeroInformado);
    console.log(`O somatório dos valores divisíveis por 3 ou 5 abaixo de ${numeroInformado} é: ${resultado}`);
}

