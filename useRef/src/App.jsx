import { useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Creamos una referencia al input
  const inputRef = useRef(null);

  // Función para mostrar el valor del input
  const mostrarValor = () => {
    alert(`Escribiste: ${inputRef.current.value}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>useRef - Leer input sin estado</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe algo"
        style={{ padding: '8px', fontSize: '16px', marginRight: '8px' }}
      />
      <button onClick={mostrarValor}>Mostrar valor</button>
    </div>
  );
}

export default App;