export default function Sort({ sortParams, onSortChange }) {
  return (
    <>
      <label>
        Sort by:
        <select
          value={sortParams.sortKey}
          onChange={(e) => onSortChange("sortKey", e.target.value)}
        >
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="city">City</option>
        </select>
      </label>
      <label>
        Order:
        <select
          value={sortParams.sortOrder}
          onChange={(e) => onSortChange("sortOrder", e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </>
  );
}
