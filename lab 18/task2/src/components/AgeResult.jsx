export default function AgeResult({ age }) {
  return (
    <div className="result" aria-live="polite">
      <p>
        <strong>{age?.years ?? "--"}</strong> years
      </p>
      <p>
        <strong>{age?.months ?? "--"}</strong> months
      </p>
      <p>
        <strong>{age?.days ?? "--"}</strong> days
      </p>
    </div>
  );
}
