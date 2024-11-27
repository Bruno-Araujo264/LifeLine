function chooseFeeling(emotion){
    var emoji = document.getElementsByClassName('emoji')
    for(var cleanSelected = 0; cleanSelected <= 4; cleanSelected++){
        emoji[cleanSelected].style.backgroundColor = 'transparent'
    }

    if(emotion == 'feliz'){
        var cor = 'yellow'
        emojiHighlight = document.getElementById('feliz')
        emojiHighlight.style.backgroundColor = "yellow"
        emojiHighlight.style.borderRadius = '100%'
        return cor
    }
    if(emotion == 'triste'){
        var cor = 'lightblue'
        emojiHighlight = document.getElementById('triste')
        emojiHighlight.style.backgroundColor = "lightblue"
        emojiHighlight.style.borderRadius = '100%'
        return cor
    }
    if(emotion == 'raiva'){
        var cor = 'red'
        emojiHighlight = document.getElementById('raiva')
        emojiHighlight.style.backgroundColor = "red"
        emojiHighlight.style.borderRadius = '100%'
        return cor
    }
    if(emotion == 'surpreso'){
        var cor = 'plum'
        emojiHighlight = document.getElementById('surpreso')
        emojiHighlight.style.backgroundColor = "plum"
        emojiHighlight.style.borderRadius = '100%'
        return cor
    }
    if(emotion == 'medo'){
        var cor = 'gainsboro'
        emojiHighlight = document.getElementById('medo')
        emojiHighlight.style.backgroundColor = "gainsboro"
        emojiHighlight.style.borderRadius = '100%'
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
