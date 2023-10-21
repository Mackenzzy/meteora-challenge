import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Cabecalho from './components/cabecalho/index.tsx';
import './index.css';
function App() {
  return (
    <div className="App">
      <Cabecalho /> {/* Use o componente Cabecalho aqui */}
      {/* Outros conteúdos e componentes da sua aplicação */}
    </div>
  );
}


export default App;
