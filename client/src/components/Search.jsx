export default function Search({ onNameFilterChange, nameFilter }) {
  return (
    <>
      <label>
        Search by name:
        <input
          type="text"
          value={nameFilter}
          onChange={(e) => onNameFilterChange(e.target.value)}
        />
      </label>
    </>
  );
}
