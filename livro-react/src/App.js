import LivroLista from './LivroLista';
import RedirectIcon from './RedirectIcon';

function App() {
  return (
    <>
      <LivroLista />
      {/* ícone redirecionador: altere a prop url para o destino desejado */}
      <RedirectIcon url="https://github.com/biel-cosso" label="Abrir GitHub" />
    </>
  );
}

export default App;
