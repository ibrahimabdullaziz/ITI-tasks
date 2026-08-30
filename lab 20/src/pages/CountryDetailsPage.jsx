import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import StatusState from "../components/StatusState.jsx";
import {
  countriesQueryOptions,
  countryQueryOptions,
  getCountryCode,
} from "../api/countries.js";

function formatPopulation(value) {
  if (value == null) return "N/A";
  return value.toLocaleString();
}

function joinList(items) {
  if (!items?.length) return "N/A";
  return items.join(", ");
}

export default function CountryDetailsPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: country,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    ...countryQueryOptions(code),
    placeholderData: () => {
      const list = queryClient.getQueryData(countriesQueryOptions.queryKey);
      return list?.find(
        (item) => getCountryCode(item)?.toUpperCase() === code.toUpperCase(),
      );
    },
  });

  const countries =
    queryClient.getQueryData(countriesQueryOptions.queryKey) ?? [];

  const borderCountries = (country?.borders ?? []).map((borderCode) => {
    const match = countries.find(
      (item) =>
        getCountryCode(item)?.toUpperCase() === borderCode.toUpperCase(),
    );

    return {
      code: borderCode,
      name: match?.name?.common ?? borderCode,
    };
  });

  if (isPending && !country) {
    return (
      <main>
        <StatusState variant="loading" message="Loading country…" />
      </main>
    );
  }

  if (isError && !country) {
    return (
      <main>
        <StatusState
          variant="error"
          message={error?.message ?? "Could not load this country."}
          onRetry={() => refetch()}
        />
      </main>
    );
  }

  const name = country.name?.common ?? "Unknown";
  const flagImg = country.flags?.svg ?? country.flags?.png;
  const currencies = country.currencies?.map((item) => item.name) ?? [];
  const languages = country.languages?.map((item) => item.name) ?? [];

  return (
    <main className="details">
      <button type="button" className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <section className="details__layout">
        {flagImg ? (
          <img
            className="details__flag"
            src={flagImg}
            alt={`Flag of ${name}`}
          />
        ) : (
          <div
            className="details__flag details__flag--emoji"
            aria-hidden="true"
          >
            {country.flag ?? "🌍"}
          </div>
        )}

        <div className="details__content">
          <h2 className="details__name">{name}</h2>

          <div className="details__meta">
            <div>
              <p>
                <span>Native Name:</span> {country.nativeName ?? "N/A"}
              </p>
              <p>
                <span>Population:</span> {formatPopulation(country.population)}
              </p>
              <p>
                <span>Region:</span> {country.region ?? "N/A"}
              </p>
              <p>
                <span>Sub Region:</span> {country.subregion ?? "N/A"}
              </p>
              <p>
                <span>Capital:</span> {country.capital?.[0] ?? "N/A"}
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain:</span>{" "}
                {joinList(country.topLevelDomain)}
              </p>
              <p>
                <span>Currencies:</span> {joinList(currencies)}
              </p>
              <p>
                <span>Languages:</span> {joinList(languages)}
              </p>
            </div>
          </div>

          <div className="details__borders">
            <span>Border Countries:</span>
            {borderCountries.length === 0 ? (
              <p className="details__borders-empty">None</p>
            ) : (
              <ul className="border-list">
                {borderCountries.map((border) => (
                  <li key={border.code}>
                    <Link
                      to={`/country/${border.code}`}
                      className="border-chip"
                    >
                      {border.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
