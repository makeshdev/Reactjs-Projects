import { useState } from "react";
import { CommendInput } from "./components/CommendInput";
import { CommendList } from "./components/CommendList";

function App() {
  const [stores, setStores] = useState([]);

  function givenData(comment) {
    setStores([...stores, comment]);
  }

  return (
    <>
      <div className="container">
        <CommendInput commendClick={givenData} />
        <CommendList stores={stores} />
      </div>
    </>
  );
}

export default App;
