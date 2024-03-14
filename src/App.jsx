import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
function App() {
  const [formularioEstaVisivel, setFormularioEstaVisisvel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState("");
  return (
    <>
      <form className="form">
        <fieldset className="fieldset">
          <div>
            <label className="label">Digite o nome do usuario do GitHub</label>
            <input
              className="input"
              type="text"
              onBlur={(e) => setNomeUsuario(e.target.value)}
              placeholder="username"
            />
          </div>
          <div>
            <img className="github" src="/github4.svg" alt=""></img>
          </div>
        </fieldset>
      </form>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && <Formulario />}

      <button
        onClick={() => setFormularioEstaVisisvel(!formularioEstaVisivel)}
        type="button"
      >
        toggle form
      </button> */}
    </>
  );
}
export default App;
