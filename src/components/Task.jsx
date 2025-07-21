export default function Task({ value, date }) {
  return (
    <li>
      <p>Treść zadania: {value}</p>
      <p>Data utworzenia: {date}</p>
    </li>
  );
}
