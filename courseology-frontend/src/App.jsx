import React, { useEffect, useState } from "react";
import "./App.scss";
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    let url = "http://localhost:8080/courses";
    const res = await fetch(url);
    const data = await res.json();
    setCourses(data);
  };
  useEffect(() => {
    getCourses();
  }, []);

  console.log(courses);
  return (
    <div className="app">
      <Dashboard courses={courses} />
    </div>
  );
}

export default App;
