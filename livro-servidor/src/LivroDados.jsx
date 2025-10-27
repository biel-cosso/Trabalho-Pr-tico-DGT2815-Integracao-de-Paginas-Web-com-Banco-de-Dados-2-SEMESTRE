import React, { useState } from 'react';
import Livro from './modelo/Livro';
import ControleLivros from './controle/ControleLivros';
import { useNavigate } from 'react-router-dom';

const controleLivro = new ControleLivros();

function LivroDados() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [preco, setPreco] = useState('');

  const incluir = (evento) => {
    evento.preventDefault();
    const novo = new Livro('', titulo, autor, Number(ano), Number(preco));
    controleLivro.incluir(novo).then(() => navigate('/'));
  };

  return (
    <main className="container mt-4">
      <h1>Novo Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input className="form-control" value={titulo} onChange={e => setTitulo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input className="form-control" value={autor} onChange={e => setAutor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Ano</label>
          <input className="form-control" value={ano} onChange={e => setAno(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Preço</label>
          <input className="form-control" value={preco} onChange={e => setPreco(e.target.value)} />
        </div>
        <button className="btn btn-primary">Salvar</button>
      </form>
    </main>
  );
}

export default LivroDados;
