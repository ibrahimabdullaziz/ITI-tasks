function TodoFilters({ filter, onChange, className = "filters" }) {
  const options = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className={className}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={filter === option.value ? "active" : ""}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilters;
