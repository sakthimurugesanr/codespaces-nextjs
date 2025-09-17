import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>📝 Todo List</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={addTodo} style={{ padding: "8px 12px" }}>
          Add
        </button>
      </div>

      <ul style={{ marginTop: "20px", padding: 0, listStyle: "none" }}>
        {todos.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            <span
              onClick={() => toggleTodo(t.id)}
              style={{
                cursor: "pointer",
                textDecoration: t.done ? "line-through" : "none",
              }}
            >
              {t.text}
            </span>
            <button onClick={() => removeTodo(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
