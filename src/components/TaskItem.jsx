export function TaskItem({ task, onToggleTask, onDeleteTask }) {
  const inputId = `task-${task.id}`;

  return (
    <li className={task.completed ? "task-item completed" : "task-item"}>
      <input
        type="checkbox"
        id={inputId}
        checked={task.completed}
        onChange={() => {
          onToggleTask(task.id);
        }}
      />
      <label htmlFor={inputId}>{task.text}</label>
      <button
        type="button"
        onClick={() => onDeleteTask(task.id)}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
}
