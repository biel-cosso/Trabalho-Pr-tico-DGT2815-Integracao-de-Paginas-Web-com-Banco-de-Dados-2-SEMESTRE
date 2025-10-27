const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
  titulo: String,
  resumo: String,
  editora: String,
  autor: String
});

module.exports = mongoose.model('Livro', LivroSchema);
