import { useState } from "react";
import AddTask from "./components/AddTask.jsx";
function App() {
  const [tasks, setTasks] = useState([]);
  function handleAddTaskClick(inputValue) {
    setTasks((prev) => [...prev, inputValue]);
  }
  return (
    <>
      <AddTask handleAddTaskClick={handleAddTaskClick} />
    </>
  );
}

export default App;
