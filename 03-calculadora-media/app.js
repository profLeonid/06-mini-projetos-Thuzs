const calculoMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3


function aprovacao(calculoMedia){
    if(calculoMedia >= 7 ){
        return "Aprovado"
    }else if(calculoMedia >= 5 && calculoMedia <= 6.9){
        return "Recuperação"
    }else{
        return "Reprovado"
    }

}
function escolherCor(situacao){
    if(situacao == "Aprovado"){
        return "situacao1"
    }else if(situacao == "Recuperação"){
        return "situacao2"
    }else if(situacao == "Reprovado"){
        return "situacao3"
    }
}

function handleClick(){
    const nota1 = Number(document.getElementById("nota1").value)
    const nota2 = Number(document.getElementById("nota2").value)
    const nota3 = Number(document.getElementById("nota3").value)
    const resultado = document.getElementById("resultado")

    const media = calculoMedia(nota1, nota2, nota3)

    const situacao = aprovacao(media)

    const cor = escolherCor(situacao)

    resultado.textContent = `A media do aluno é ${media} e ele está ${situacao}`
    resultado.classList.remove('situacao1', 'situacao2', 'situacao3')
    resultado.classList.add(cor)
}
