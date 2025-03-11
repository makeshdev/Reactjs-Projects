import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Index from "./components/todo-item";
import TodoDetail from "./components/todo-detail/TodoDetail";
import { Skeleton } from "@mui/material";

const App = () => {
  const [todolist, setTodolist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errormsg, setErrormsg] = useState(null);
  const [getDetail, setGetDetail] = useState(null);
  const [getDetailPop, setGetDetailPop] = useState(false);

  async function fetchDetails(getDetailId) {
    try {
      const fetchDetail = await fetch(
        `https://dummyjson.com/todos/${getDetailId}`
      );
      const response = await fetchDetail.json();
      if (response) {
        setGetDetail(response);
        setGetDetailPop(true);
      } else {
        setGetDetail(null);
        setGetDetailPop(false);
      }
    } catch (error) {
      console.log(error.message);
      setErrormsg("Some error occured on details");
    }
  }

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
  if (loading) {
    return <Skeleton variant="rectangular" width={650} height={650} />;
  }
  return (
    <div className={style.wrapper}>
      <h1 className={style.heading}>Simple TODO-APP using Meterial UI</h1>
      <div className={style.grid_sty}>
        {todolist && todolist.length > 0
          ? todolist.map((todo) => (
              <Index todo={todo} fetchDetails={fetchDetails} />
            ))
          : null}
      </div>
      <TodoDetail
        getDetail={getDetail}
        getDetailPop={getDetailPop}
        setGetDetailPop={setGetDetailPop}
      />
    </div>
  );
};

export default App;
