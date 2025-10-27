const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir, alterar } = require('../modelo/livro-dao');

// listar todos
router.get('/', async (req, res) => {
  try {
    const lista = await obterLivros();
    res.json(lista);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// obter por id (opcional mas útil)
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const livros = await obterLivros();
    const livro = livros.find(l => String(l._id) === String(id));
    if (!livro) return res.status(404).json({ erro: 'Livro não encontrado' });
    res.json(livro);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// incluir
router.post('/', async (req, res) => {
  try {
    await incluir(req.body);
    res.json({ mensagem: 'Incluído com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// alterar (PUT)
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const dados = req.body;
    await alterar(id, dados);
    res.json({ mensagem: 'Atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// excluir
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await excluir(id);
    res.json({ mensagem: 'Excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
