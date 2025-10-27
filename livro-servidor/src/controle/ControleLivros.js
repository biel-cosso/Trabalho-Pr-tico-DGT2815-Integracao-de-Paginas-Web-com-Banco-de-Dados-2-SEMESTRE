import Livro from '../modelo/Livro';

const baseURL = 'http://localhost:3030/livros';

export default class ControleLivros {
  async obterLivros() {
    const resposta = await fetch(baseURL);
    const dados = await resposta.json();
    return dados.map(l => new Livro(l._id, l.titulo, l.autor, l.ano, l.preco));
  }

  async excluir(codigo) {
    const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return resposta.ok;
  }

  async incluir(livro) {
    const body = {
      titulo: livro.titulo,
      autor: livro.autor,
      ano: livro.ano,
      preco: livro.preco
    };

    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    return resposta.ok;
  }
}
