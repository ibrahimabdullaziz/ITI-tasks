import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import SearchControls from "../components/SearchControls.jsx";
import StatusState from "../components/StatusState.jsx";
import CountryGrid from "../components/CountryGrid.jsx";
import { countriesQueryOptions } from "../api/countries.js";
import { REGIONS } from "../utils/regions.js";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "";
  const selectedRegion = searchParams.get("region") ?? "All";

  const {
    data: countries = [],
    isPending,
    isError,
    error,
    refetch,
  } = useQuery(countriesQueryOptions);

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

  function updateFilters(updates) {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);

        Object.entries(updates).forEach(([key, value]) => {
          if (!value || value === "All") {
            next.delete(key);
          } else {
            next.set(key, value);
          }
        });

        return next;
      },
      { replace: true },
    );
  }

  return (
    <main>
      <SearchControls
        search={search}
        onSearchChange={(value) => updateFilters({ q: value })}
        selectedRegion={selectedRegion}
        onRegionChange={(value) => updateFilters({ region: value })}
        regions={REGIONS}
      />

      {isPending ? (
        <StatusState variant="loading" />
      ) : isError ? (
        <StatusState
          variant="error"
          message={
            error?.message ?? "Could not load countries. Please try again."
          }
          onRetry={() => refetch()}
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
  );
}
