import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Este efecto se ejecuta una sola vez cuando se carga el componente
  useEffect(() => {
    console.log('useEffect se ejecutó');
    alert('¡Componente insertado!');
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>useEffect - Mensaje al cargar</h1>
      <p>Revisa la consola o espera la alerta.</p>
    </div>
  );
}

export default App;
