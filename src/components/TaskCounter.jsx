import checkIcon from "../assets/check_icon.png";

export function TaskCounter({ total, completed }) {
  return (
    <div className="task-counter">
      <img
        className="task-counter-icon"
        src={checkIcon}
        alt="completed tasks"
      />
      <span>
        {total}/{completed}
      </span>
    </div>
  );
}
