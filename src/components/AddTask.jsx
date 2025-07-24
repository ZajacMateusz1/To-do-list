import { useState } from "react";
import { styled } from "styled-components";
const FormElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  width: 50%;
  height: 4vh;
  margin: 0.5rem 0;
  padding: 0.7rem 0.5rem;
  border-radius: 5px;
  border: 1.5px solid black;
`;
const Label = styled.label`
  font-size: 1.5rem;
`;
const Button = styled.button`
  padding: 0.5rem;
  text-transform: uppercase;
  background-color: #0b57d0;
  color: white;
  border: none;
  border-radius: 5px;
`;
export default function AddTask({ handleAddTaskClick }) {
  const [inputValue, setInputValue] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <FormElements>
      <Label htmlFor="task">Dodaj zadanie:</Label>
      <Input
        type="text"
        id="task"
        placeholder="Podaj treść zadania"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTaskClick(inputValue);
            setInputValue("");
          }
        }}
      />
      <Button
        type="button"
        onClick={() => {
          handleAddTaskClick(inputValue);
          setInputValue("");
        }}
      >
        Dodaj zadanie
      </Button>
    </FormElements>
  );
}
