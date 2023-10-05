export default function Select({
  onCityFilterChange,
  onAgeFilterChange,
  ageFilter,
  cityFilter,
}) {
  return (
    <>
      <label>
        Filter by city:
        <select
          value={cityFilter}
          onChange={(e) => onCityFilterChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="new york">New York</option>
          <option value="detroit">Detroit</option>
          <option value="metropolis">Metropolis</option>
        </select>
      </label>
      <label>
        Filter by age:
        <select
          value={ageFilter}
          onChange={(e) => onAgeFilterChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="21">21</option>
          <option value="106">106</option>
          <option value="47">47</option>
        </select>
      </label>
    </>
  );
}
