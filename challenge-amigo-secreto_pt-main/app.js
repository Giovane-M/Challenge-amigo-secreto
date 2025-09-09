let listaAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1','Amigo Secreto');
exibirTextoNaTela('h2','Digite o nome dos seus amigos');

function atualizarListaHTML() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for(let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
}

function adicionarAmigo() {
    let add = document.querySelector('input').value;
    
    if (add === "") {
        alert('Por favor, insira um nome');
        return;
    }
    listaAmigos.push(add);
    document.querySelector('input').value = "";
    exibirTextoNaTela('h2', 'Lista: ' + listaAmigos.join(", "));
    atualizarListaHTML();

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
