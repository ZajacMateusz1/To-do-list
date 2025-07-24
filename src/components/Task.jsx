import { styled } from "styled-components";
const Li = styled.li`
  flex-basis: 23%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #c4eed0;
  border-radius: 5px;
  position: relative;
  min-height: 25vh;
  p.text {
    text-align: center;
  }
  p.date {
    font-size: 0.5rem;
    margin-top: 0.2rem;
    text-align: right;
  }

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
      <p className="text">
        <p>Treść zadania:</p>
        <p>{value}</p>
      </p>
      <p className="date">Data utworzenia: {date}</p>
    </Li>
  );
}
