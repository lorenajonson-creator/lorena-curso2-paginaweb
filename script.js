const botao = document.queryselector("button");
botao.addEventListener("click", botaoclicado);

function botaoclicado() {
    let texto = botao.queryselector("span");
    texto.textContent++;
}






