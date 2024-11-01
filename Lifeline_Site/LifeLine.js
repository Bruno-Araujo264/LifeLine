function entrar() {
    const livro = document.getElementById("livro")
    const pag6 = document.getElementById("pagina6")
    const pag4 = document.getElementById("pagina4")
    const pag2 = document.getElementById("pagina2")

    
    livro.classList.add("escala")
    pag6.classList.add("transicao")
    livro.classList.add("escala2")
    pag4.classList.add("transicao")
    livro.classList.add("escala3")
    pag2.classList.add("transicao")
}