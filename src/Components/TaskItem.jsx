import React, { useState, useRef } from "react";

const TaskItem = ({ task, onDelete, onComplete, onTaskEditSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  return (
    <li>
      {!isEditing ? (
        <>
          <div>
            <span
              style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
              {task.text}
            </span>{" "}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="success" onClick={() => onComplete(task.id)}>
              Complete
            </button>{" "}
            <button className="danger" onClick={() => onDelete(task.id)}>
              Remove
            </button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <input defaultValue={task.text} type="text" ref={inputRef} />
          </div>
          <div>
            <button
              onClick={() => {
                onTaskEditSave(inputRef.current.value, task.id);
                setIsEditing(false);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
