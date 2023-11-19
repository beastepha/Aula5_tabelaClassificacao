let renan = {
  nome: 'Renan',
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

let lucas = {
  nome: 'Lucas',
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

let diego = {
  nome: 'Diego',
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};



let elementoTabela = document.getElementById('tabelaJogadores');
function exibirTela() {
  elementoTabela.innerHTML = `
  <tr>
          <td>${renan.nome}</td>
          <td>${renan.vitoria}</td>
          <td>${renan.empate}</td>
          <td>${renan.derrota}</td>
          <td>${renan.pontos}</td>
          <td><button onClick="adicionarVitoria(renan)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(renan)">Empate</button></td>
          <td><button onClick="adicionarDerrota(renan)">Derrota</button></td>
        </tr>
          <tr>
          <td>${lucas.nome}</td>
          <td>${lucas.vitoria}</td>
          <td>${lucas.empate}</td>
          <td>${lucas.derrota}</td>
          <td>${lucas.pontos}</td>
          <td><button onClick="adicionarVitoria(lucas)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(lucas)">Empate</button></td>
          <td><button onClick="adicionarDerrota(lucas)">Derrota</button></td>
        </tr>
                  <tr>
          <td>${diego.nome}</td>
          <td>${diego.vitoria}</td>
          <td>${diego.empate}</td>
          <td>${diego.derrota}</td>
          <td>${diego.pontos}</td>
          <td><button onClick="adicionarVitoria(diego)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(diego)">Empate</button></td>
          <td><button onClick="adicionarDerrota(diego)">Derrota</button></td>
        </tr>
  `;
 }

exibirTela();

function adicionarVitoria(jogador) {
  jogador.vitoria++
  jogador.pontos +=3
  exibirTela()
}
function adicionarEmpate(jogador) {
  jogador.empate++
  jogador.pontos++
  exibirTela()
}
function adicionarDerrota(jogador) {
  jogador.derrota++
  exibirTela()
}
