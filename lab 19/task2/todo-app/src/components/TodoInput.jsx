import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="checkbox-circle" aria-hidden="true"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </form>
  );
}

export default TodoInput;
