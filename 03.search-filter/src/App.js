import { useEffect, useState } from "react";

function App() {
  const [names, setNames] = useState(null);

  useEffect(() => {
    const apiValues = async () => {
      try {
        let url = await fetch("https://jsonplaceholder.typicode.com/todos");
        let response = await url.json();
        setNames(response);
      } catch (error) {
        console.error("This is the error", error);
      }
    };
    apiValues();
  }, []);
  return (
    <>
      <div>
        {names?.map((items) => (
          <div key={items.id}>
            <p>{items?.userId}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
