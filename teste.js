function aplicardesconto(valor, desconto) {
    if (desconto > valor) return 0
    return valor - desconto
}

function aplicardescontotest() {
    return aplicardesconto(10,2) === 8
}

console.log('A aplicação de desconto está funcionando? ')
console.log(aplicardescontotest())