import { useState } from "react";
export default function AddTask({ handleAddTaskClick }) {
  const [inputValue, setInputValue] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
      <div className="formElement">
        <label htmlFor="task">Dodaj zadanie:</label>
        <input
          type="text"
          id="task"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={() => handleAddTaskClick(inputValue)}>
        Dodaj zadanie
      </button>
    </>
  );
}
