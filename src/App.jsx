import { useState, useRef } from "react";
import AddTask from "./components/AddTask.jsx";
import Task from "./components/Task.jsx";
function App() {
  const id = useRef(0);
  const [tasks, setTasks] = useState([]);
  function handleAddTaskClick(inputValue) {
    setTasks((prev) => [
      ...prev,
      { id: id.current, value: inputValue, date: new Date().toLocaleString() },
    ]);
    id.current++;
  }
  function handleDeleteTaskClick(id) {
    setTasks((prev) => {
      return prev.filter((element) => element.id !== id);
    });
  }
  return (
    <>
      <AddTask handleAddTaskClick={handleAddTaskClick} />
      <ol>
        {tasks.map((task) => (
          <Task
            handleDeleteTaskClick={handleDeleteTaskClick}
            {...task}
            key={task.id}
          />
        ))}
      </ol>
    </>
  );
}

export default App;
