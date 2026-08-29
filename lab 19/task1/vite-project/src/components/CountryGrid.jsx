import CountryCard from "./CountryCard.jsx";

export default function CountryGrid({ countries }) {
  return (
    <section
      className="card-grid"
      aria-label="Countries list"
      aria-live="polite"
    >
      {countries.map((country) => (
        <CountryCard
          key={country.name?.common ?? country.cca3 ?? country.iso2}
          country={country}
        />
      ))}
    </section>
  );
}
