import useTemporizador from './useTemporizador';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const { segundos, reiniciar } = useTemporizador(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Custom Hook - useTemporizador</h1>
      <p>Tiempo transcurrido: {segundos} segundos</p>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default App;