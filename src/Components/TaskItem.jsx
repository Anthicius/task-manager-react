import React, { useState, useRef } from "react";

const TaskItem = ({ task, onDelete, onComplete, onTaskEditSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null)

  return (
    <li>
      {!isEditing ? <span>
        <span style={{ textDecoration: task.completed ? "line-through" : "" }}>
          {task.text}
        </span>{" "}
        <button onClick={() => onComplete(task.id)}>Complete</button>{" "}
        <button onClick={() => onDelete(task.id)}>Remove</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </span> : <span>
        <input defaultValue={task.text} ref={inputRef} />
        <button onClick={()=>{onTaskEditSave(inputRef.current.value, task.id); setIsEditing(false)}}>Save</button>
        <button onClick={()=>{setIsEditing(false)}}>Cancel</button>
        </span>
      }
    </li>
  );
};

export default TaskItem;
