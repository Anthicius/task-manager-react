import {useState, useEffect} from 'react'

const useTodos = () => {

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

  const handleAddTask = (newTask) => {
    if (newTask.trim().length > 0) {
      setTasks((prev) => [
        ...prev,
        { text: newTask, completed: false, id: Date.now() },
      ]);
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

  return {
    tasks,
    setTasks,
    handleAddTask,
    handleDeleteTask,
    handleCompleteTask,
    handleTaskEditSave

  }
}

export default useTodos