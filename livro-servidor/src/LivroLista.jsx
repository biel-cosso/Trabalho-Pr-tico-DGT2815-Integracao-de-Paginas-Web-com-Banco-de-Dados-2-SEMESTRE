import React, { useEffect, useState } from 'react';
import ControleLivros from './controle/ControleLivros';

const controleLivre = new ControleLivros();

function LivroLista() {
  const [livros, setLivros] = useState([]);

  const carregar = () => {
    controleLivre.obterLivros().then(resp => setLivros(resp));
  };

  useEffect(() => {
    carregar();
  }, []);

  const excluir = (codigo) => {
    controleLivre.excluir(codigo).then(() => carregar());
  };

  return (
    <main className="container mt-4">
      <h1>Lista de Livros</h1>
      <table className="table">
        <thead>
          <tr><th>Título</th><th>Autor</th><th>Ano</th><th>Preço</th><th></th></tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <tr key={index}>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>{livro.ano}</td>
              <td>{livro.preco}</td>
              <td>
                <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;
