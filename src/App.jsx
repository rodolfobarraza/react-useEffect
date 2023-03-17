import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]); // puede ser null, pero se debe agregar una condición

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
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