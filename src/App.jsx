import { useState } from "react"
import Perfil from "./components/Perfil"
import RepoList from "./components/RepoList";

function App() {

  const [nomeUsuario,setNomeUsuario] = useState('')
  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}></input>
    {nomeUsuario.length > 4 && (  
      <>    
        <Perfil nomeUsuario = {nomeUsuario} />
        <RepoList nomeUsuario = {nomeUsuario} />
      </>
    )}
    {/* {formularioEstaVisivel && (
      <Formulario />
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle Form</button> */}
    </>
  )
}

export default App
