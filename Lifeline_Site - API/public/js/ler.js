document.addEventListener("DOMContentLoaded", function () {
    const btnVoltar = document.querySelector('#voltar');
    const btnAvancar = document.querySelector('#avançar');
    const livro = document.querySelector("#livro");

    let paginas = []; // Armazena todas as páginas criadas dinamicamente.
    let paginaAtual = 0; // Página inicial.

    // Evento para avançar a página.
    btnAvancar.addEventListener("click", avancarPagina);

    // Evento para voltar a página.
    btnVoltar.addEventListener("click", voltarPagina);

    function configurarPaginas() {
        paginas = document.querySelectorAll(".papel"); // Seleciona todas as páginas.
        paginas.forEach((pagina, index) => {
            pagina.style.zIndex = paginas.length - index; // Define zIndex de forma decrescente.
        });
    }

    function abrirLivro() {
        livro.style.transform = "translateX(50%)";
        btnVoltar.style.transform = "translateX(-240px)";
        btnAvancar.style.transform = "translateX(240px)";
    }

    function fecharLivro() {
        livro.style.transform = "translateX(100%)";
        btnVoltar.style.transform = "translateX(0px)";
        btnAvancar.style.transform = "translateX(0px)";
    }

    function avancarPagina() {
        if (paginaAtual < paginas.length) {
            paginas[paginaAtual].classList.add("virada");

            // Ajuste do zIndex após virar a página
            setTimeout(() => {
                
                paginas[paginaAtual].style.zIndex = paginas.length - 1;
                
                paginaAtual++;
                
                if (paginaAtual === paginas.length) { // Fechar o livro apenas na última página.
                    fecharLivro();
                } else if (paginaAtual === 1) { // Abrir o livro ao sair da capa.
                    abrirLivro();
                }
            }, 700);
        }
    }

    function voltarPagina() {
        if (paginaAtual > 0) {
            paginaAtual--;

            paginas[paginaAtual].classList.remove("virada");
            setTimeout(() => {
                
                // Reajustar o zIndex ao voltar a página
                paginas[paginaAtual].style.zIndex = paginas.length - paginaAtual;
                
                if (paginaAtual === paginas.length - 1) { // Reabrir o livro ao sair da última página.
                    abrirLivro();
                }
                
                if (paginaAtual === 0) { // Fechar o livro ao voltar para a capa.
                    livro.style.transform = "translateX(0%)";
                    btnVoltar.style.transform = "translateX(0px)";
                    btnAvancar.style.transform = "translateX(0px)";
                }
            }, 700);
        }
    }

    // Executar após a criação das páginas dinâmicas.
    window.adicionarZindex = function () {
        configurarPaginas(); // Atualiza a lista de páginas e zIndexes após a criação dinâmica.
    };
});
