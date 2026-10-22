export function FilterButton({ filter, isActive, onFilterChange }) {
  return (
    <button
      type="button"
      className={isActive ? "filter-button active" : "filter-button"}
      onClick={() => onFilterChange(filter)}
    >
      {filter.charAt(0).toUpperCase() + filter.slice(1)}
    </button>
  );
}
