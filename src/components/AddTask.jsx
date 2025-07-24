import { useState } from "react";
import { styled } from "styled-components";
const FormElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & input {
    width: 50%;
    height: 4vh;
    margin: 0.5rem 0 0;
    padding: 0.7rem 0.5rem;
    border-radius: 5px;
    border: 1.5px solid
      ${({ $isInputEmpty }) => ($isInputEmpty ? "red" : "black")};
    background-color: ${({ $isInputEmpty }) =>
      $isInputEmpty ? "rgb(252, 73, 73)" : "transparent"};
  }
  & label {
    font-size: 1.5rem;
  }
  & p.error {
    margin: 0.5rem 0;
    color: red;
    font-weight: 700;
    font-size: 0.8rem;
    visibility: ${({ $isInputEmpty }) => {
      return $isInputEmpty ? "visible" : "hidden";
    }};
  }
  & button {
    padding: 0.5rem;
    text-transform: uppercase;
    background-color: #0b57d0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default function AddTask({ handleAddTaskClick }) {
  const [inputValue, setInputValue] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function isInputEmptyCheck(inputValue) {
    if (inputValue.trim()) {
      handleAddTaskClick(inputValue);
      setInputValue("");
      setIsInputEmpty(false);
    } else {
      setIsInputEmpty(true);
    }
  }
  return (
    <FormElements $isInputEmpty={isInputEmpty}>
      <label htmlFor="task">Podaj treść zadania:</label>
      <input
        type="text"
        id="task"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            isInputEmptyCheck(inputValue);
          }
        }}
      />
      <p className="error">Wprowadź treść zadania</p>
      <button
        type="button"
        onClick={() => {
          isInputEmptyCheck(inputValue);
        }}
      >
        Dodaj zadanie
      </button>
    </FormElements>
  );
}
