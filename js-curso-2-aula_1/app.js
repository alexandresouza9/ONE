//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 10';

function exibirtextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirtextoNaTela('h1','Jogo do número secreto');
exibirtextoNaTela('p', 'Escolha um número entre 1 10');


function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(cuhute == numeroSecreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()* 10 + 1);
}