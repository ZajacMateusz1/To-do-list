import { styled } from "styled-components";
const colors = ["#c2e7ff", "#C4EED0", "#F29900"];
const Li = styled.li`
  flex-basis: 23%;
  padding: 0.5rem;
  background-color: #c4eed0;
  border-radius: 5px;
  position: relative;

  & button.delete {
    position: absolute;
    right: 0;
    top: 0;
    background-color: red;
    color: white;
    border: none;
    padding: 4px;
    font-size: 1rem;
  }
`;
export default function Task({ id, value, date, handleDeleteTaskClick }) {
  return (
    <Li>
      <button className="delete" onClick={() => handleDeleteTaskClick(id)}>
        X
      </button>
      <p>Treść zadania: {value}</p>
      <p>Data utworzenia: {date}</p>
    </Li>
  );
}
