const mongoose = require('mongoose');
const Livro = require('./livro-schema');

const obterLivros = async () => Livro.find();

const incluir = async (livro) => Livro.create(livro);

const excluir = async (codigo) => {
  const ObjectId = mongoose.Types.ObjectId;
  return await Livro.deleteOne({ _id: new ObjectId(codigo) });
};

const alterar = async (codigo, livro) => {
  const ObjectId = mongoose.Types.ObjectId;
  return await Livro.updateOne({ _id: new ObjectId(codigo) }, livro);
};

module.exports = { obterLivros, incluir, excluir, alterar };
