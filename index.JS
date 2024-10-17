var setaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("Leonardo")
var samantha = window.document.getElementById("Samantha")
var bruna = window.document.getElementById("Bruna")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
        leonardo.style = "display:none"
        bruna.style = "display:flex"
        setaDireita.style = "display:none"
        setaEsquerda.style = "display:flex; margin-top: 130px"
}

function RolarParaEsquerda() {
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex; margin-top: 130px"
}