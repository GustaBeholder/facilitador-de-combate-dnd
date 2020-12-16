function Jogador(nome, iniciativa){
    this.nome = nome;
    this.iniciativa = iniciativa;
}


var jogadores = [];
var texto;

function criaNovoJogador(){
    var nome = document.getElementById("nome").value;
    var iniciativa = document.getElementById("ini").value;
    
    var jogador = new Jogador(nome, iniciativa);

    jogadores.push(jogador); 
    alert("Jogador " + jogador.nome + " foi adcionado!");
}


    

function exibirJogadores(){
    for(let player of jogadores){
        var minhaLista = document.getElementById('lista');
        var newLi = document.createElement('li')
        texto = "Nome: " + player.nome + " " + "inciativa: " + player.iniciativa; 
        newLi.textContent = texto;
        minhaLista.appendChild(newLi);
    }
}

