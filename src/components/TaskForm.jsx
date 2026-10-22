import { useState } from "react";

export function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText === "") {
      return;
    }
    onAddTask(trimmedText);
    setText("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        aria-label="New task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
}
