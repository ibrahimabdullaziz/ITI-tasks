function formatPopulation(value) {
  if (value == null) return "N/A";
  return value.toLocaleString();
}

export default function CountryCard({ country }) {
  const name = country.name?.common ?? "Unknown";
  const flagImg = country.flags?.svg ?? country.flags?.png;
  const flagEmoji = country.flag;
  const capital = country.capital?.[0] ?? "N/A";
  const region = country.region ?? "N/A";
  const population = formatPopulation(country.population);

  return (
    <article key={name} className="country-card" tabIndex={0} aria-label={name}>
      {flagImg ? (
        <img
          className="country-card__flag"
          src={flagImg}
          alt={`Flag of ${name}`}
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
    </article>
  );
}
