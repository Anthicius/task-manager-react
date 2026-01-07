import React from "react";

const TaskItem = ({ task, onDelete, onComplete }) => {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? "line-through" : "" }}>
        {task.text}
      </span>
      {" "}
        <button onClick={() => onComplete(task.id)}>Complete</button>{" "}
        <button onClick={() => onDelete(task.id)}>Remove</button>
    </li>
  );
};

export default TaskItem;
