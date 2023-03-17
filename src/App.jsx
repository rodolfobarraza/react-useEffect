import { useCallback, useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]); // puede ser null, pero se debe agregar una condición

  const fetchData = useCallback(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    setUsers(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  /** Aquí condición si el useState de users se inicializa null */
  // if (!users) return <div>Cargando...</div>;

  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ul>
        { users.map((user) => (
            <li key={user.id}>{user.name}</li>
          )) }
      </ul>
    </>
  );
}

export default App;