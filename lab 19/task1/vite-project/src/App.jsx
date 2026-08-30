import { useMemo, useState } from "react";
import TopBar from "./components/TopBar.jsx";
import SearchControls from "./components/SearchControls.jsx";
import StatusState from "./components/StatusState.jsx";
import CountryGrid from "./components/CountryGrid.jsx";
import { useCountries } from "./context/useCountries.js";
import { REGIONS } from "./utils/regions.js";
import "./index.css";

function App() {
  const { countries, loading, error, refreshCountries } = useCountries();
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredCountries = useMemo(() => {
    const query = search.trim().toLowerCase();

    return countries.filter((country) => {
      const name = country.name?.common?.toLowerCase() ?? "";
      const capital = country.capital?.[0]?.toLowerCase() ?? "";

      const matchesSearch = name.includes(query) || capital.includes(query);
      const matchesRegion =
        selectedRegion === "All" || country.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [countries, search, selectedRegion]);

  return (
    <>
      <TopBar />

      <main>
        <SearchControls
          search={search}
          onSearchChange={setSearch}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          regions={REGIONS}
        />

        {loading ? (
          <StatusState variant="loading" />
        ) : error ? (
          <StatusState
            variant="error"
            message={error}
            onRetry={refreshCountries}
          />
        ) : (
          <>
            <p className="results-count">
              {filteredCountries.length}{" "}
              {filteredCountries.length === 1 ? "country" : "countries"} found
            </p>

            {filteredCountries.length === 0 ? (
              <StatusState
                variant="empty"
                message="No countries match your search."
              />
            ) : (
              <CountryGrid countries={filteredCountries} />
            )}
          </>
        )}
      </main>
    </>
  );
}

export default App;
