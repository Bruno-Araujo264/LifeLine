const btnVoltar = document.querySelector('#voltar')
const btnAvancar = document.querySelector('#avançar')
const livro = document.querySelector("#livro")

const papel1 = document.getElementById("#p1")
const papel2 = document.getElementById("#p2")
const papel3 = document.getElementById("#p3")
// https://www.youtube.com/watch?v=0kD6ff2J3BQ&ab_channel=CodingStar
btnAvancar.addEventListener("click",avancarPagina)
btnVoltar.addEventListener("click",voltarPagina)


var paginaAtual = 1
var numeroDePaginas = 3
var ultimaPagina = paginaAtual + 1

function abrirLivro() {

}

function fecharLivro() {

}

function avancarPagina() {
    if (paginaAtual < ultimaPagina){
        for (pagina = paginaAtual;pagina < ultimaPagina; pagina++){
            if (pagina == 1){
                abrirLivro()
                papel1.classList.add("virada")
                break
            }
            if (pagina == 2) {
                papel2.classList.add("virada")
                break
            } else {
                papel3.classList.add("virada")
                break
            }
        } paginaAtual++
    }
}