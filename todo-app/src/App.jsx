import React, { useEffect, useState } from "react";

const App = () => {
  const [todolist, setTodolist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errormsg, setErrormsg] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const fetchData = await fetch("https://dummyjson.com/todos");
      const response = await fetchData.json();
      if (response?.todos && response?.todos?.length > 0) {
        setTodolist(response?.todos);
        setLoading(false);
      } else {
        setTodolist([]);
        setLoading(false);
        setErrormsg("Data not found");
      }
    } catch (error) {
      console.log(error.message);
      setErrormsg("Some error occured");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Simple TODO-APP using meterial UI</h1>
    </div>
  );
};

export default App;
