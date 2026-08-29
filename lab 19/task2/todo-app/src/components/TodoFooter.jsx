import TodoFilters from "./TodoFilters";

function TodoFooter({ activeCount, filter, onFilterChange, onClearCompleted }) {
  return (
    <div className="list-footer">
      <span>{activeCount} items left</span>
      <TodoFilters
        filter={filter}
        onChange={onFilterChange}
        className="filters desktop"
      />
      <button type="button" className="clear-btn" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFooter;
