import { useState, useEffect } from 'react';

function useTemporizador(iniciar = true) {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    if (!iniciar) return;

    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    // Limpiar el intervalo 
    return () => clearInterval(intervalo);
  }, [iniciar]);

  const reiniciar = () => setSegundos(0);

  return { segundos, reiniciar };
}

export default useTemporizador;
