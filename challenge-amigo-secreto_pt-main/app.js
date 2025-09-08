//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1','Amigo Secreto');
exibirTextoNaTela('h2','Digite o nome dos seus amigos');

function adicionarAmigo() {
    let add = document.querySelector('input').value;
    
    if (add === "") {
        alert('Digite um nome válido');
        return;
    }
    listaAmigos.push(add);
    document.querySelector('input').value = "";
    exibirTextoNaTela('h2', 'Lista: ' + listaAmigos.join(", "));
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicionar pelo menos 2 amigos!");
        return;
    }
    let sorteado = Math.floor(Math.random()* listaAmigos.length);
    let amigoSecreto = listaAmigos[sorteado];

    exibirTextoNaTela('h2', "O amigo secreto é: " + amigoSecreto);
}