import axios from "axios";

const API_URL = "http://localhost:3030/livros";

class LivroService {
  listar() {
    return axios.get(API_URL);
  }

  cadastrar(livro) {
    return axios.post(API_URL, livro);
  }

  atualizar(id, livro) {
    return axios.put(`${API_URL}/${id}`, livro);
  }

  excluir(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new LivroService();
