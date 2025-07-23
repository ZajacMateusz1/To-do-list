export default function Task({ id, value, date, handleDeleteTaskClick }) {
  return (
    <li>
      <button onClick={() => handleDeleteTaskClick(id)}>X</button>
      <p>Treść zadania: {value}</p>
      <p>Data utworzenia: {date}</p>
    </li>
  );
}
