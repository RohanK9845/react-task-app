import { useState } from "react";

function TaskItem({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task);

  const handleSave = () => {
    if (!editedText.trim()) return;
    onEdit(editedText.trim());
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>💾</button>
          <button onClick={() => setIsEditing(false)}>❌</button>
        </>
      ) : (
        <>
          <span>{task}</span>
          <button onClick={() => setIsEditing(true)}>✏️</button>
          <button onClick={onDelete}>🗑️</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
