import { queryOptions } from "@tanstack/react-query";

const API_URL = "https://countries.dev";

export const countryKeys = {
  all: ["countries"],
  list: () => [...countryKeys.all, "list"],
  detail: (code) => [...countryKeys.all, "detail", String(code).toUpperCase()],
};

export function normalizeCountry(entry) {
  return {
    name: { common: entry.name },
    nativeName: entry.nativeName,
    capital: entry.capital ? [entry.capital] : [],
    region: entry.region || "Unknown",
    subregion: entry.subregion,
    population: entry.population,
    flags: entry.flags,
    flag: entry.flag,
    iso2: entry.alpha2Code,
    iso3: entry.alpha3Code,
    topLevelDomain: entry.topLevelDomain,
    currencies: entry.currencies,
    languages: entry.languages,
    borders: entry.borders ?? [],
    area: entry.area,
  };
}

async function fetchJson(url) {
  const response = await fetch(url);

  if (response.status === 404) {
    throw new Error("Country not found");
  }

  if (!response.ok) {
    throw new Error("Failed to load countries");
  }

  return response.json();
}

export async function fetchCountries() {
  const data = await fetchJson(`${API_URL}/countries`);

  return data
    .map(normalizeCountry)
    .sort((a, b) =>
      (a.name?.common ?? "").localeCompare(b.name?.common ?? ""),
    );
}

export async function fetchCountryByCode(code) {
  const data = await fetchJson(`${API_URL}/alpha/${encodeURIComponent(code)}`);
  const country = Array.isArray(data) ? data[0] : data;

  if (!country) {
    throw new Error("Country not found");
  }

  return normalizeCountry(country);
}

export const countriesQueryOptions = queryOptions({
  queryKey: countryKeys.list(),
  queryFn: fetchCountries,
});

export function countryQueryOptions(code) {
  return queryOptions({
    queryKey: countryKeys.detail(code),
    queryFn: () => fetchCountryByCode(code),
  });
}

export function getCountryCode(country) {
  return country.iso3 || country.iso2;
}
