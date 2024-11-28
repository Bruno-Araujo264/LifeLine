function escolherEmocao(emocao){
    var emoji = document.getElementsByClassName('emoji')
    for(var limparSelecionado = 0; limparSelecionado <= 4; limparSelecionado++){
        emoji[limparSelecionado].style.backgroundColor = 'transparent'
    }

    if(emocao == 'feliz'){
        var cor = 'yellow'
        emojiEscolhido = document.getElementById('feliz')
        emojiEscolhido.style.backgroundColor = "yellow"
        emojiEscolhido.style.borderRadius = '100%'
        return cor
    }
    if(emocao == 'triste'){
        var cor = 'lightblue'
        emojiEscolhido = document.getElementById('triste')
        emojiEscolhido.style.backgroundColor = "lightblue"
        emojiEscolhido.style.borderRadius = '100%'
        return cor
    }
    if(emocao == 'raiva'){
        var cor = 'red'
        emojiEscolhido = document.getElementById('raiva')
        emojiEscolhido.style.backgroundColor = "red"
        emojiEscolhido.style.borderRadius = '100%'
        return cor
    }
    if(emocao == 'surpreso'){
        var cor = 'plum'
        emojiEscolhido = document.getElementById('surpreso')
        emojiEscolhido.style.backgroundColor = "plum"
        emojiEscolhido.style.borderRadius = '100%'
        return cor
    }
    if(emocao == 'medo'){
        var cor = 'gainsboro'
        emojiEscolhido = document.getElementById('medo')
        emojiEscolhido.style.backgroundColor = "gainsboro"
        emojiEscolhido.style.borderRadius = '100%'
        return cor
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const btnVoltar = document.querySelector('#voltar');
    const btnAvancar = document.querySelector('#avançar');
    const livro = document.querySelector("#livro");

    const papel1 = document.getElementById("p1");
    const papel2 = document.getElementById("p2");

    btnAvancar.addEventListener("click", avancarPagina);
    btnVoltar.addEventListener("click", voltarPagina);

    let paginaAtual = 1;
    const numeroDePaginas = 2;
    const ultimaPagina = numeroDePaginas + 1;

    function abrirLivro() {
        livro.style.transform = "translateX(50%)"
        btnVoltar.style.transform = "translateX(-240px)"
        btnAvancar.style.transform = "translateX(240px)"
    }

    function fecharLivro(estaNoComeco) {
        if(estaNoComeco){
            livro.style.transform = "translateX(0%)"
        } else {
            livro.style.transform = "translateX(100%)"
        }
        btnVoltar.style.transform = "translateX(0px)"
        btnAvancar.style.transform = "translateX(0px)"
    }

    function avancarPagina() {
        if (paginaAtual < ultimaPagina){
            for (pagina = paginaAtual;pagina < ultimaPagina; pagina++){
                if (pagina == 1){
                    abrirLivro()
                    papel1.classList.add("virada")
                    setTimeout(() => {
                        papel1.style.zIndex = 1
                      }, 1000);
                    break
                } else {
                    papel2.classList.add("virada")
                    papel2.style.zIndex = 2
                    fecharLivro(false)
                    break
                }
            } 
            paginaAtual++
        }
    }

    function voltarPagina() {
        if (paginaAtual >= 1) {
            for (pagina = paginaAtual;pagina <= ultimaPagina; pagina++){
                if (pagina == 2){
                    fecharLivro(true)
                    papel1.classList.remove("virada");
                    papel1.style.zIndex = 2
                    break;
                } else {
                    abrirLivro()
                    papel2.classList.remove("virada");
                    papel2.style.zIndex = 1
                    break;
                }
            }
            paginaAtual--
        }
    }
});
