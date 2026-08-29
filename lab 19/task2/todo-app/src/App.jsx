import { useState, useEffect } from "react";
import "./index.css";
import AppHeader from "./components/AppHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import TodoFooter from "./components/TodoFooter";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const addTodo = (text) => {
    const cleanedText = text.trim();

    if (!cleanedText) return;

    setTodos((currentTodos) => [
      {
        id: Date.now(),
        text: cleanedText,
        completed: false,
      },
      ...currentTodos,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app-container">
      <div className="bg-hero" />

      <main className="main-content">
        <AppHeader
          theme={theme}
          onToggleTheme={() =>
            setTheme((currentTheme) =>
              currentTheme === "light" ? "dark" : "light",
            )
          }
        />

        <TodoInput onAdd={addTodo} />

        <div className="todo-list-container">
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />

          <TodoFooter
            activeCount={activeCount}
            filter={filter}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
          />
        </div>

        <TodoFilters
          filter={filter}
          onChange={setFilter}
          className="mobile-filters"
        />
      </main>
    </div>
  );
}

export default App;
