'use strict'

//Jeito diferente de se fazer função
const calcularValorEconomizado = (preco, desconto) => preco * desconto / 100

// function calcularValorEconomizado(preco, desconto){
//     return preco * desconto /100

// }

//Jeito diferente de se fazer uma função
const calcularValorFinal = (preco, valorEconomizado) => preco - valorEconomizado

// function calcularValorFinal(preco, ValorEconomizado){
//     return preco - ValorEconomizado
// }

function escolherCor(desconto){
    if(desconto <= 5 ){
        return "desconto1"
    }else if(desconto <= 10 ){
        return 'desconto2'
    }else{
        return 'desconto3'
    }
}

function handleClick(){
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')

    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal = calcularValorFinal(preco, valorEconomizado)

    const cor = escolherCor(desconto)

    resultado.textContent = `O valor que foi economizado é de: ${valorEconomizado}, sendo o preço final com o desconto: ${precoFinal}`
    resultado.classList.remove('desconto1', 'desconto2', 'desconto3')
    resultado.classList.add(cor)
}