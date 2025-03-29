import { useReducer } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Reducer: recibe el estado actual y una acción, y retorna el nuevo estado
function reducer(estado, accion) {
  switch (accion) {
    case 'incrementar':
      return estado + 1;
    case 'reiniciar':
      return 0;
    default:
      return estado;
  }
}

function App() {
  // useReducer devuelve el estado y la función dispatch para ejecutar acciones
  // El primer argumento es el reducer y el segundo es el estado inicial
  // El estado inicial es 0
  // dispatch es una función que recibe una acción y llama al reducer
  // El reducer recibe el estado actual y la acción y retorna el nuevo estado
  const [contador, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>useReducer - Contador</h1>
      <p>Valor: {contador}</p>
      <button onClick={() => dispatch('incrementar')}>Incrementar</button>
      <button onClick={() => dispatch('reiniciar')} style={{ marginLeft: '10px' }}>
        Reiniciar
      </button>
    </div>
  );
}

export default App;