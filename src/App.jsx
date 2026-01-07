import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (newTask.trim().length > 0) {
      setTasks((prev) => [...prev, { text: newTask, completed: false, id:Date.now()}]);
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

  return (
    <>
      <input
        value={newTask}
        type="text"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
              {task.text}
            </span>{" "}
            <button onClick={() => handleCompleteTask(task.id)}>Complete</button>{" "}
            <button onClick={() => handleDeleteTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
