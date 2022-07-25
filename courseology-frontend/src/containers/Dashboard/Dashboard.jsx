import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import CourseList from "../CourseList/CourseList";
import Form from "../../components/Form/Form";
import Nav from "../../components/Nav/Nav";
import CourseInfo from "../CourseInfo/CourseInfo";

const Dashboard = ({ courses }) => {
  console.log(courses);
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList courses={courses} />} />
        <Route
          path="/courses/:courseId"
          element={<CourseInfo courses={courses} />}
        />
        <Route path="/update" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
