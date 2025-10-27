import React, { useEffect, useState } from 'react';
import LivroFormModal from './LivroFormModal';
import ConfirmModal from './ConfirmModal';

function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [exibirModal, setExibirModal] = useState(false);
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  // controle para confirmação de exclusão
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [idParaExcluir, setIdParaExcluir] = useState(null);

  const listarLivros = () => {
    fetch('http://localhost:3030/livros')
      .then(res => res.json())
      .then(dados => setLivros(dados))
      .catch(err => console.error('Erro ao carregar livros:', err));
  };

  useEffect(() => {
    listarLivros();
  }, []);

  const abrirModalNovo = () => {
    setLivroSelecionado(null);
    setExibirModal(true);
  };

  const abrirModalEdicao = (livro) => {
    setLivroSelecionado(livro);
    setExibirModal(true);
  };

  const salvarLivro = (livro) => {
    const metodo = livroSelecionado ? 'PUT' : 'POST';
    const url = livroSelecionado
      ? `http://localhost:3030/livros/${livroSelecionado._id}`
      : `http://localhost:3030/livros`;

    fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro)
    })
    .then(() => {
      listarLivros();
      setExibirModal(false);
    })
    .catch(err => console.error('Erro salvar livro:', err));
  };

  // abre modal de confirmação em vez de window.confirm
  const confirmarExclusao = (id) => {
    setIdParaExcluir(id);
    setConfirmVisible(true);
  };

  const excluirConfirmado = () => {
    const id = idParaExcluir;
    setConfirmVisible(false);
    setIdParaExcluir(null);

    fetch(`http://localhost:3030/livros/${id}`, { method: 'DELETE' })
      .then(() => listarLivros())
      .catch(err => console.error('Erro ao excluir:', err));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Catálogo de Livros</h2>

      <button className="btn btn-primary mb-3" onClick={abrirModalNovo}>
        + Novo Livro
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro._id}>
              <td>{livro.titulo}</td>
              <td>{livro.resumo}</td>
              <td>{livro.editora}</td>
              <td>{livro.autor}</td>
              <td>
                <button
                  className="btn btn-sm"
                  style={{ color: 'blue', marginRight: 8 }}
                  onClick={() => abrirModalEdicao(livro)}
                >
                  ✏️
                </button>

                <button
                  className="btn btn-sm"
                  style={{ color: 'red' }}
                  onClick={() => confirmarExclusao(livro._id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {exibirModal && (
        <LivroFormModal
          livroSelecionado={livroSelecionado}
          onClose={() => setExibirModal(false)}
          onSave={salvarLivro}
        />
      )}

      <ConfirmModal
        show={confirmVisible}
        title="Confirmar Exclusão"
        message="Tem certeza que deseja excluir este livro?"
        confirmText="Excluir"
        cancelText="Cancelar"
        onClose={() => setConfirmVisible(false)}
        onConfirm={excluirConfirmado}
      />
    </div>
  );
}

export default LivroLista;
