import "./App.css";
import { Tabela } from "./Tabela/Tabela";
import { Tabelamock } from "./Tabela/Tabelamock";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <Tabela></Tabela>
        {/* <Tabelamock></Tabelamock> */}
      </div>
    </div>
  );
}

export default App;
