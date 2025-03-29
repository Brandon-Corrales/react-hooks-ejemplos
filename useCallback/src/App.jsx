import { useCallback } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Memoriza la función para evitar recrearla en cada renderizado
  // Esto es útil cuando pasamos funciones como props a componentes hijos
  // o cuando la función se usa en un efecto
  // que depende de ella. En este caso, la función no tiene dependencias,
  // por lo que se memoriza una sola vez.
  const saludar = useCallback(() => {
    alert('¡Hola desde useCallback!');
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>useCallback - Saludo memorizado</h1>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
}

export default App;
