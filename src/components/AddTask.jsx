export default function AddTask() {
  return (
    <>
      <div className="form">
        <label id="task">Dodaj zadanie:</label>
        <input type="text" id="task" />
      </div>
      <button type="button">Dodaj zadanie</button>
    </>
  );
}
