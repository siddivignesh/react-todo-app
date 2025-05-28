import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./style.css";

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <Header />
      <ToDoList setData={setData} data={data} />
    </>
  );
}

export default App;