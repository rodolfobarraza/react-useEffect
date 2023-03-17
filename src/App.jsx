import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('montado')
  }, [counter]); // en [], los elementos que se estarán escuchando, si es vacío se ejecutara solo una vez al principio, si no se coloca todo cambio en la aplicación se ejecutará

  return <>
    <h1>UseEffect</h1>
    <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
  </>;
}

export default App;