import { useState } from "react";
import LivroService from "../services/LivroService";
import { useNavigate } from "react-router-dom";

function LivroDados() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const navigate = useNavigate();

  const salvar = async () => {
    await LivroService.cadastrar({ titulo, autor });
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Novo Livro</h2>
      <label>Título:</label><br />
      <input value={titulo} onChange={e => setTitulo(e.target.value)} /><br /><br />

      <label>Autor:</label><br />
      <input value={autor} onChange={e => setAutor(e.target.value)} /><br /><br />

      <button onClick={salvar}>Salvar</button>
      <button onClick={() => navigate("/")}>Cancelar</button>
    </div>
  );
}

export default LivroDados;
