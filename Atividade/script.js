var divSequencial = 1;
var divIncremental = 1;
const COR_VERDE = '#66DD66';
const VERDE_LIMAO = '#7cfc00';
const COR_VERMELHA = '#E61919';
const COR_AZUL = '#5190c6';

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
function alterarCorCampo() {
    let campo = document.getElementById('ValidaCampoVazio');
    if (!campo.value) {
        campo.style.backgroundColor = COR_VERMELHA;
    } else {
        campo.style.backgroundColor = null;
    }
}
function alterarCor() {
    let div = document.getElementById('modificaCor');
    div.style.backgroundColor = VERDE_LIMAO;
}
function selecionarCor() {
    let opcao = document.getElementById('selecionaOpcao').value;
    if (opcao === 'vermelho') {
        document.getElementById(
            'selecionarCor').style.color = COR_VERMELHA;
    } else if (opcao === 'verde') {
        document.getElementById('selecionarCor').style.color = COR_VERDE;
    } else if (opcao === 'azul') {
        document.getElementById('selecionarCor').style.color = COR_AZUL;
    }
}
function redimencionar() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    document.querySelector('#redimenciona').innerHTML = `largura: ${windowWidth} X Altura: ${windowHeight}`;
}
redimencionar();

window.addEventListener('resize', function() {
    redimencionar();
});
function validarForm() {
    let form = document.getElementById('formulario').elements;
    let nomeValidado = this.validarNome(form);
    let radioValidado = this.validarRadio(form);
    let checkValidado = this.validarCheckbox(form);
    if (nomeValidado && radioValidado && checkValidado) {
        document.getElementById('formulario').submit();
    }
}
function validarNome(form) {
    let validaCampo = document.getElementById('validaNome');
    let validado = false;
    if (!form.campoNome.value) {
        validaCampo.innerHTML = 'Preencha o campo !';
        validaCampo.style.color = COR_VERMELHA;
    } else {
        validaCampo.innerHTML = null;
        validado = true;
    }
    return validado;
}

function validarRadio(form) {
    let validaRadio = document.getElementById('validaRadio');
    let validado = false;
    if (!form.ling_prog.value) {
        validaRadio.innerHTML = 'Selecione uma opção !';
        validaRadio.style.color = COR_VERMELHA;
    } else {
        validaRadio.innerHTML = null;
        validado = true;
    }
    return validado;
}

function validarCheckbox(form) {
    let validaCheck = document.getElementById('validaCheckbox');
    let validado = false;
    if (!form.check.checked) {
        validaCheck.innerHTML = 'Seleciona a opção !';
        validaCheck.style.color = COR_VERMELHA;
    } else {
        validaCheck.innerHTML = null;
        validado = true;
    }
    return validado;
}
function validarCaractere() {
    let campo = document.getElementById('validaCaractere').value;
    let cont = 0;
    for (var i = 0; i < campo.length; i++) {
        if (campo[i] === '@') {
            cont++;
        }
    }
    let novaDiv = document.createElement('div');
    novaDiv.setAttribute('id', 'campoValidacao');
    if (cont === 1) {
        let texto = document.createTextNode('ERRO');
        novaDiv.appendChild(texto);
        novaDiv.style.color = COR_VERMELHA;
        validarCampoPreenchido(novaDiv);
    } else if (!campo) {
        let texto = document.createTextNode('CAMPO VAZIO');
        novaDiv.appendChild(texto);
        novaDiv.style.color = COR_VERMELHA;
        validarCampoPreenchido(novaDiv);
    } else {
        let texto = document.createTextNode('SUCESSO');
        novaDiv.appendChild(texto);
        novaDiv.style.color = COR_VERDE;
        validarCampoPreenchido(novaDiv);
    }
}
function validarCampoPreenchido(novaDiv) {
    if (!document.getElementById('campoValidacao')) {
        document.getElementById('caractereEspecial').appendChild(novaDiv);
    } else {
        let campoAtual = document.getElementById('campoValidacao');
        campoAtual.replaceChild(novaDiv, campoAtual.childNodes[0]);
    }
}