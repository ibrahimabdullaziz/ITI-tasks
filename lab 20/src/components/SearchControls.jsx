export default function SearchControls({
  search,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  regions,
}) {
  return (
    <section className="controls" aria-label="Filters">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          id="country-search"
          type="search"
          placeholder="Search for a country..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Search for a country by name or capital"
        />
      </label>

      <select
        id="region-filter"
        className="region-select"
        value={selectedRegion}
        onChange={(event) => onRegionChange(event.target.value)}
        aria-label="Filter by region"
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region === "All" ? "Filter by Region" : region}
          </option>
        ))}
      </select>
    </section>
  );
}
