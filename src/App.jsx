import { useState } from "react";
import TaskItem from "./Components/TaskItem";
import useTodos from "./hooks/useTodos";

function App() {
  const [newTask, setNewTask] = useState("");
  const {
    tasks,
    setTasks,
    handleAddTask,
    handleDeleteTask,
    handleCompleteTask,
    handleTaskEditSave,
  } = useTodos();

  const onAdd = () => {
    handleAddTask(newTask);
    setNewTask("");
  };

  return (
    <>
      <input
        onKeyDown={(e) => (e.key === "Enter" ? onAdd() : null)}
        value={newTask}
        type="text"
        placeholder="Enter your Todo task"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button onClick={onAdd}>Add Task</button>
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
      {tasks.length === 0 && (
        <p style={{ textAlign: "center", color: "#888", marginTop: "20px" }}>
          No tasks yet. Add one above!
        </p>
      )}
    </>
  );
}

export default App;
