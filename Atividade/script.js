var divSequencial = 1;
var divIncremental = 1;

function mudarEstado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
    document.getElementById(el).style.display = 'block';
    else
    document.getElementById(el).style.display = 'none';
}
function mudarCorUm(el){
    document.getElementById(el).style.color="#ffff00"
}
function mudarCorDois(el){
    document.getElementById(el).style.color="black";
}
function upperCase(){
    var texto = document.getElementById("texto").value;
    document.getElementById("texto").value = texto.toUpperCase();
}
function lowerCase(){
    var texto = document.getElementById("texto").value;
    document.getElementById("texto").value = texto.toLowerCase();
}
function textoEdit(){
    var texto = document.getElementById("textoEditado").value;
    document.getElementById("textoEditado").value = texto.toUpperCase();
}
function validador() {
    var li = document.getElementById("validar");

    if (li.childNodes[4]) {
        li.removeChild(li.childNodes[4]);
    }

    if (document.getElementById("validarNumero").value.match(/[^0-9]/g)) {
        var novaDiv = document.createElement("div");
        var conteudo = document.createTextNode("Campo deve ser numerico");
        novaDiv.appendChild(conteudo);
        li.appendChild(novaDiv);
    } else if (!document.getElementById("validarNumero").value.match(/^([0-9]?[0-9])$/g)) {
        var novaDiv = document.createElement("div");
        var conteudo = document.createTextNode("O valor deve estar contido no intervalo entre 0 e 99");
        novaDiv.appendChild(conteudo);
        li.appendChild(novaDiv);
    }

}
function geraDivSequencial() {
    var li = document.getElementById("divSequencia");
    var novaDiv = document.createElement("div");
    var conteudo = document.createTextNode(divSequencial++);
    novaDiv.appendChild(conteudo);
    li.appendChild(novaDiv);
}
function geraDivIncremental() {
    var div = document.getElementById("divIncremental").innerText = divIncremental++;
}
function geraDivIncremental() {
    var div = document.getElementById("divIncremental").innerText = divIncremental++;
}
function trocaImagem() {
    document.getElementById("imagem").src = "https://img.r7.com/images/gabigol-flamengo-x-gremio-libertadores-2019-23102019230152763?dimensions=660x360&&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;resize=660x360&amp;crop=660x360+0+88";
}
function trocaImagemOriginal() {
    document.getElementById("imagem").src = "https://www.unifacisa.edu.br/assets/imgs/logo.svg";
}
function zoomIn() {
    document.getElementById("textoZoom").style.zoom = "200%" 
}
function zoomOut() {
    document.getElementById("textoZoom").style.zoom = "100%" 
}
function trocarCorVermelho(id){
    document.getElementById(id).style.color="#e80d0d";
}
