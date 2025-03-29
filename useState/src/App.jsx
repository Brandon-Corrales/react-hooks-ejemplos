import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Creamos una variable de estado "contador" y su función para actualizarlo
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>useState - Contador</h1>
      <p>Valor actual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default App;
