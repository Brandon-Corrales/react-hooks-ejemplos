import { useState, useMemo } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [numero, setNumero] = useState(0);

  // Calcular el doble solo cuando cambia el número
  const doble = useMemo(() => {
    console.log('Calculando doble...');
    return numero * 2;
  }, [numero]);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>useMemo - Doble de un número</h1>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <p>El doble es: {doble}</p>
    </div>
  );
}

export default App;
