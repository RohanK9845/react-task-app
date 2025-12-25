import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔹 Fetch tasks from API (ONLY first time)
  const fetchTasksFromAPI = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await response.json();

      const apiTasks = data.map(item => item.title);
      setTasks(apiTasks);

      // Save API tasks to localStorage
      localStorage.setItem("tasks", JSON.stringify(apiTasks));
    } catch {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 On app load: localStorage first, API second
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      fetchTasksFromAPI();
    }
  }, []);

  // 🔹 Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskText.trim()) return;
    setTasks([...tasks, taskText.trim()]);
    setTaskText("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            tasks={tasks}
            taskText={taskText}
            setTaskText={setTaskText}
            addTask={addTask}
            deleteTask={deleteTask}
            editTask={editTask}
            loading={loading}
            error={error}
          />
        }
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
