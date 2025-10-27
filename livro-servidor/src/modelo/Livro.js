class Livro {
  constructor(codigo = '', titulo = '', autor = '', ano = 0, preco = 0) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.preco = preco;
  }
}

export default Livro;
