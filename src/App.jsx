import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { FilterButton } from "./components/FilterButton";

// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 class): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 class): useState, the controlled form, toggle, delete, filtering.
const initialTasks = [
  { id: 1, text: "Call Mom", completed: false },
  { id: 2, text: "Buy the new issue of Scientific American", completed: false },
  { id: 3, text: "Return the textbook to Josie", completed: false },
  { id: 4, text: "Buy the new album by Rake", completed: false },
  { id: 5, text: "Buy a gift card for Dad", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all");

  const completedCount = tasks.filter((task) => task.completed).length;

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  }

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }
    if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  function handleAddTask(text) {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="app">
      <Header total={tasks.length} completed={completedCount} />
      <SideNav inboxCount={tasks.length} />

      <main className="main-content">
        <section className="main-section">
          <h1>Inbox</h1>
          <div className="filter-buttons">
            <FilterButton
              filter="all"
              isActive={filter === "all"}
              onFilterChange={setFilter}
            />
            <FilterButton
              filter="active"
              isActive={filter === "active"}
              onFilterChange={setFilter}
            />
            <FilterButton
              filter="completed"
              isActive={filter === "completed"}
              onFilterChange={setFilter}
            />
          </div>
          <TaskList
            tasks={visibleTasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
          <TaskForm onAddTask={handleAddTask} />
        </section>
      </main>
    </div>
  );
}

export default App;
