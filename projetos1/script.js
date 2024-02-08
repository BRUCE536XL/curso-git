var nao_e = 0;

function fuja() {
    document.getElementById("nao_e").textContent = "TENTOU " + nao_e; // Atualiza o texto do parágrafo
    var botaonao = document.getElementById("nao");
    var largurajanela = window.innerWidth;
    var alturaJanela = window.innerHeight;
  
    nao_e++;

    var margem = -5; // Margem para manter o botão longe da borda
    var larguraLimite = 700; // Largura limite da área
    var alturaLimite = 500; // Altura limite da área

    var maxX = Math.min(largurajanela - larguraLimite, largurajanela - botaonao.offsetWidth - margem);
    var maxY = Math.min(alturaJanela - alturaLimite, alturaJanela - botaonao.offsetHeight - margem);

    var aleatorioX = Math.max(Math.floor(Math.random() * maxX), margem);
    var aleatorioY = Math.max(Math.floor(Math.random() * maxY), margem);

    botaonao.style.left = aleatorioX + "px";
    botaonao.style.top = aleatorioY + "px";
}

function clik() {
    var foto = document.getElementById("foto");
    foto.width = 600; // Nova largura desejada
    foto.height = 300; // Nova altura calculada para manter a proporção (200 * 0.75)
    
    foto.src = "https://i.pinimg.com/originals/6f/4e/31/6f4e31c19d69356a7ee7edb19e216ff7.gif";

    // Adicionar um botão para resetar a página
    var botao = document.createElement("button");
    botao.textContent = "Resetar Página";
    botao.id = "resetButton";
    botao.classList.add("btn", "btn-primary");
    botao.addEventListener("click", function() {
    location.reload(); // Recarregar a página
    });
    document.body.appendChild(botao);

}
