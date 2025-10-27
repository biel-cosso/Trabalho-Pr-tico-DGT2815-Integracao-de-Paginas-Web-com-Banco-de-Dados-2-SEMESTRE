import React, { useEffect, useState } from 'react';
import './App.css';

export default function LivroFormModal({ livroSelecionado, onClose, onSave }) {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [editora, setEditora] = useState('');
  const [autor, setAutor] = useState('');

  useEffect(() => {
    if (livroSelecionado) {
      setTitulo(livroSelecionado.titulo || '');
      setResumo(livroSelecionado.resumo || '');
      setEditora(livroSelecionado.editora || '');
      setAutor(livroSelecionado.autor || '');
    } else {
      setTitulo('');
      setResumo('');
      setEditora('');
      setAutor('');
    }
  }, [livroSelecionado]);

  // fecha com ESC e trava scroll
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const salvar = () => {
    const livro = { titulo, resumo, editora, autor };
    onSave && onSave(livro);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        <h4>{livroSelecionado ? 'Editar Livro' : 'Cadastrar Livro'}</h4>

        <div className="modal-body">
          <label className="form-label">Título</label>
          <input
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label className="form-label">Resumo</label>
          <input
            className="form-control"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />

          <label className="form-label">Editora</label>
          <input
            className="form-control"
            value={editora}
            onChange={(e) => setEditora(e.target.value)}
          />

          <label className="form-label">Autor</label>
          <input
            className="form-control"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn btn-success" onClick={salvar}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
