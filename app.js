let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
    } else {
        alert("Digite um nome válido e que ainda não esteja na lista.");
    }

    nomeInput.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    
    let listaEmbaralhada = [...amigos].sort(() => Math.random() - 0.5);
    
    
    let sorteado = listaEmbaralhada[0];

    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${sorteado}</strong></li>`;
}
