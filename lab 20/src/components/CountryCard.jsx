import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { countryQueryOptions, getCountryCode } from "../api/countries.js";

function formatPopulation(value) {
  if (value == null) return "N/A";
  return value.toLocaleString();
}

export default function CountryCard({ country }) {
  const queryClient = useQueryClient();
  const name = country.name?.common ?? "Unknown";
  const code = getCountryCode(country);
  const flagImg = country.flags?.svg ?? country.flags?.png;
  const flagEmoji = country.flag;
  const capital = country.capital?.[0] ?? "N/A";
  const region = country.region ?? "N/A";
  const population = formatPopulation(country.population);

  function prefetchCountry() {
    if (!code) return;
    queryClient.prefetchQuery(countryQueryOptions(code));
  }

  return (
    <Link
      to={`/country/${code}`}
      className="country-card"
      aria-label={`View details for ${name}`}
      onMouseEnter={prefetchCountry}
      onFocus={prefetchCountry}
    >
      {flagImg ? (
        <img
          className="country-card__flag"
          src={flagImg}
          alt=""
          loading="lazy"
        />
      ) : (
        <div
          className="country-card__flag country-card__flag--emoji"
          aria-hidden="true"
        >
          {flagEmoji ?? "🌍"}
        </div>
      )}

      <div className="country-card__body">
        <h2 className="country-card__name">{name}</h2>
        <div className="country-card__info">
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
