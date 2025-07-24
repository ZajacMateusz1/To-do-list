import { useState } from "react";
import { styled } from "styled-components";
import Header from "./components/Header.jsx";
import AddTask from "./components/AddTask.jsx";
import Task from "./components/Task.jsx";
const Ol = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  padding: 2%;
`;
function App() {
  const [tasks, setTasks] = useState([]);
  function handleAddTaskClick(inputValue) {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), value: inputValue, date: new Date().toLocaleString() },
    ]);
  }
  function handleDeleteTaskClick(id) {
    setTasks((prev) => {
      return prev.filter((element) => element.id !== id);
    });
  }
  return (
    <>
      <Header />
      <AddTask handleAddTaskClick={handleAddTaskClick} />
      <Ol>
        {tasks.map((task) => (
          <Task
            handleDeleteTaskClick={handleDeleteTaskClick}
            {...task}
            key={task.id}
          />
        ))}
      </Ol>
    </>
  );
}

export default App;
