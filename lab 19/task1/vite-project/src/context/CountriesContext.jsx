import { useCallback, useEffect, useState } from "react";
import { CountriesContext } from "./countries-context.js";

const API_URL = "https://countries.dev/countries";

function normalize(entry) {
  return {
    name: { common: entry.name },
    capital: entry.capital ? [entry.capital] : [],
    region: entry.region || "Unknown",
    population: entry.population,
    flags: entry.flags,
    flag: entry.flag,
    iso2: entry.alpha2Code,
    iso3: entry.alpha3Code,
  };
}

export function CountriesProvider({ children }) {
  //Three-State Pattern
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCountries = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to load countries");
      }

      const data = await response.json();

      const sorted = data
        .map(normalize)
        .sort((a, b) =>
          (a.name?.common ?? "").localeCompare(b.name?.common ?? ""),
        );

      setCountries(sorted);
    } catch {
      setError("Could not load countries. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshCountries = useCallback(() => {
    loadCountries();
  }, [loadCountries]);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  return (
    <CountriesContext.Provider
      value={{ countries, loading, error, refreshCountries }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
