function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <div
        className={`checkbox-circle ${todo.completed ? "completed" : ""}`}
        onClick={onToggle}
        aria-label={
          todo.completed ? "Mark as not completed" : "Mark as completed"
        }
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle();
          }
        }}
      >
        {todo.completed && (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        )}
      </div>
      <span
        className={`todo-text ${todo.completed ? "completed" : ""}`}
        onClick={onToggle}
      >
        {todo.text}
      </span>
      <button
        className="delete-btn"
        onClick={onDelete}
        aria-label="Delete todo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.707 8.677l7.971 7.97-.707.708-7.971-7.97-7.97 7.97-.707-.708 7.97-7.971L.293.708.999 0l7.971 7.97L16.97 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
