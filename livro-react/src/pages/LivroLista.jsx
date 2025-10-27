import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LivroService from "../services/LivroService";

function LivroLista() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    carregarLivros();
  }, []);

  const carregarLivros = () => {
    LivroService.listar().then((response) => {
      setLivros(response.data);
    });
  };

  const excluir = async (id) => {
    await LivroService.excluir(id);
    carregarLivros();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Lista de Livros</h2>

      <Link to="/novo">
        <button>Novo Livro</button>
      </Link>
      <br /><br />

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro._id}>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>
                <button onClick={() => excluir(livro._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LivroLista;
