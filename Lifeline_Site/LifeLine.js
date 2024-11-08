var paginaAtual = 0; // Página atual
    function passarPagina(direcao) {
        var frente = document.getElementsByClassName('frente')
        if (direcao == 1){
            frente.style.transform = 'rotateY(${-180}deg)'
        }

        // Aplica a rotação 3D para simular a virada da página
        // const rotationDegree = -180 * (currentPage - 1);
        // book.style.transform = `rotateY(${rotationDegree}deg)`;
    }

    // Funções para avançar ou voltar as páginas
    // document.getElementById("nextButton").addEventListener("click", () => {
    //     if (currentPage < totalPages) {
    //         goToPage(currentPage + 1);
    //     }
    // });

    // document.getElementById("prevButton").addEventListener("click", () => {
    //     if (currentPage > 1) {
    //         goToPage(currentPage - 1);
    //     }
    // });

    // // Inicializa o livro na primeira página
    // goToPage(currentPage);