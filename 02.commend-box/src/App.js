import { useEffect, useRef, useState } from "react";
import { CommendInput } from "./components/CommendInput";
import { CommendList } from "./components/CommendList";

function App() {
  const [stores, setStores] = useState([]);
  const buttonref = useRef();

  function givenData(comment) {
    setStores([...stores, comment]);
  }
  useEffect(() => {
    if (stores.length > 2) {
      setTimeout(() => {
        alert("Max Commend limit is 3");
        buttonref.current.disabled = true;
      }, 1000);
    }
  }, [stores]);
  return (
    <>
      <div className="container">
        <CommendInput commendClick={givenData} buttonref={buttonref} />
        <CommendList stores={stores} />
      </div>
    </>
  );
}

export default App;
