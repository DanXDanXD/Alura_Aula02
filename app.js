//let titulo = document.querySelector('h1')
//tituto.innerHMTL = 'jogo do sem numero';

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolhe o numero sem numero de 1 a 10';

let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHMTL = texto ;
    responseVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto')
    exibirTextoNaTela('p', 'Escolhe um numero sem numero de 1 a 10')
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = 'Voce descobriu o numero secreto com ${tentativas} $ {palavratentativas} !';
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reinicar').removeAttribute('disabled')
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto e mmenor')
    } else{
        exibirTextoNaTela('p', 'O numero secreto e maior')
    }
    tentativas = tentativas + 1;
    tentativas++;
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElemnetosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElemnetosNaLista == 3); {
        listaDeNumeroSorteados = [];
    }
    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados)
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}