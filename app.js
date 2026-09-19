const botoesFiltro = document.querySelectorAll(".filtros-loja button");
const produtos = document.querySelectorAll(".card-loja");

botoesFiltro.forEach((botao) => {

    botao.addEventListener("click", () => {

        const categoria = botao.textContent.trim();

        produtos.forEach((produto) => {

            if (categoria === "Todos") {
                produto.style.display = "block";
            }

            else if (categoria === "Camisetões") {

                if (produto.classList.contains("camisetoes")) {
                    produto.style.display = "block";
                } else {
                    produto.style.display = "none";
                }

            }
else if (categoria === "T-shirts") {

    if (produto.classList.contains("tshirts")) {
        produto.style.display = "block";
    } else {
        produto.style.display = "none";
    }

}
            else if (categoria === "Croppeds") {

                if (produto.classList.contains("croppeds")) {
                    produto.style.display = "block";
                } else {
                    produto.style.display = "none";
                }

            }

        });

    });

});