import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/livros")
      .then(response => setLivros(response.data))
      .catch(error => console.error("Erro ao carregar livros:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Livros</h1>
      <ul>
        {livros.map(livro => (
          <li key={livro._id}>
            <strong>{livro.titulo}</strong> - {livro.autor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;