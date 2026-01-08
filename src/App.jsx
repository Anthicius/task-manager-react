import { useEffect, useState } from "react";
import TaskItem from "./Components/TaskItem";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("my_todo_list");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("my_todo_list", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim().length > 0) {
      setTasks((prev) => [
        ...prev,
        { text: newTask, completed: false, id: Date.now() },
      ]);
      setNewTask("");
    }
    console.log(tasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  const handleTaskEditSave = (editTaskValue, taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, text: editTaskValue };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <>
      <input
        onKeyDown={(e) => (e.key === "Enter" ? handleAddTask() : null)}
        value={newTask}
        type="text"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onComplete={handleCompleteTask}
            onTaskEditSave={handleTaskEditSave}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
