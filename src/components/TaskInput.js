function TaskInput({ taskText, setTaskText, addTask }) {
  const isDisabled = taskText.trim() === "";

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isDisabled) {
      addTask();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTask} disabled={isDisabled}>
        Add
      </button>

      {isDisabled && (
        <p style={{ color: "red", fontSize: "12px" }}>
          Task cannot be empty
        </p>
      )}
    </div>
  );
}

export default TaskInput;
