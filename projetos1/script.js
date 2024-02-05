
var botao = document.createElement("button");
var nao_e =0
function fuja() {
    var botaonao = document.getElementById("nao");
    var largurajanela = window.innerWidth;
    var alturaJanela = window.innerHeight;
    document.getElementById("nao_e").textContent = "TENTOU " + nao_e; // Atualiza o texto do parágrafo
    nao_e ++

    var margem = -5; // Margem para manter o botão longe da borda

    var maxX = largurajanela - botaonao.offsetWidth - margem;
    var maxY = alturaJanela - botaonao.offsetHeight - margem;

    var aleatorioX = Math.max(Math.floor(Math.random() * maxX), margem);
    var aleatorioY = Math.max(Math.floor(Math.random() * maxY), margem);



    botaonao.style.left = aleatorioX + "px";
    botaonao.style.top = aleatorioY + "px";
}


function clik() {
    var foto = document.getElementById("foto");
    foto.width = 200;
    foto.Height = 200
    foto.src = "https://i.pinimg.com/originals/6f/4e/31/6f4e31c19d69356a7ee7edb19e216ff7.gif"; 
    
    //////////////////////////////////////////////////////////////////////////////////////////
    // Criar um botão
var botao = document.createElement("button");

// Definir o texto do botão
botao.textContent = "Resetar Página";

// Adicionar um identificador (ID) ao botão (opcional)
botao.id = "resetButton";

// Adicionar uma classe ao botão (opcional)
botao.classList.add("btn", "btn-primary");

// Adicionar um evento de clique ao botão
botao.addEventListener("click", function() {
    location.reload(); // Recarregar a página
});

// Adicionar o botão ao corpo do documento
document.body.appendChild(botao);


}
