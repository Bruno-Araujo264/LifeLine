document.addEventListener("DOMContentLoaded", function() {
    const btnVoltar = document.querySelector('#voltar');
    const btnAvancar = document.querySelector('#avançar');
    const livro = document.querySelector("#livro");

    const papel1 = document.getElementById("p1");
    const papel2 = document.getElementById("p2");
    const papel3 = document.getElementById("p3");

    btnAvancar.addEventListener("click", avancarPagina);
    btnVoltar.addEventListener("click", voltarPagina);

    let paginaAtual = 1;
    const numeroDePaginas = 3;
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
                }
                if (pagina == 2) {
                    papel2.classList.add("virada")
                    papel2.style.zIndex = 2
                    break
                } else {
                    papel3.classList.add("virada")
                    papel3.style.zIndex = 3
                    fecharLivro(false)
                    break
                }
            } paginaAtual++
        }
    }

    function voltarPagina() {
        if (paginaAtual > 1) {
            for (pagina = paginaAtual;pagina <= ultimaPagina; pagina++){
                if (pagina == 2){
                    fecharLivro(true)
                    papel1.classList.remove("virada");
                    papel1.style.zIndex = 3
                    break;
                }
                if (pagina == 3) {
                    papel2.classList.remove("virada");
                    papel2.style.zIndex = 2
                        break;
                } else {
                    abrirLivro()
                    papel3.classList.remove("virada");
                    setTimeout(() => {
                        papel3.style.zIndex = 1
                      }, 1000);
                    break;
                }
            }
            paginaAtual--
        }
    }
});
