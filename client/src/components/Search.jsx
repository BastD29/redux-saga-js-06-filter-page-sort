export default function Search({ onFilterChange, filters }) {
  return (
    <>
      <label>
        Search by name:
        <input
          type="text"
          value={filters.value}
          onChange={(e) => onFilterChange("name", e.target.value)}
        />
      </label>
    </>
  );
}
