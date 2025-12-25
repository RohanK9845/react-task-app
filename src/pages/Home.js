import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Home({
  tasks,
  taskText,
  setTaskText,
  addTask,
  deleteTask,
  editTask,
  loading,
  error
}) {
  return (
    <div className="container">
      <Header />

      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <TaskInput
        taskText={taskText}
        setTaskText={setTaskText}
        addTask={addTask}
      />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default Home;
