import { createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Creamos el contexto
const IdiomaContexto = createContext();

function Saludo() {
  const idioma = useContext(IdiomaContexto);

  const mensajes = {
    es: '¡Hola!',
    en: 'Hello!',
    fr: 'Bonjour!',
  };

  return <h2>{mensajes[idioma]}</h2>;
}

function App() {
  return (
    //aquí se define el valor del contexto
    //en este caso el idioma es inglés
    //por lo que el saludo será "Hello!"
    <IdiomaContexto.Provider value="en">
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>useContext - Saludo por idioma</h1>
        <Saludo />
      </div>
    </IdiomaContexto.Provider>
  );
}

export default App;