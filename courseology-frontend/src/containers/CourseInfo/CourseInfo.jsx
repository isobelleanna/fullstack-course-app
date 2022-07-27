import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CourseInfo = ({ courses }) => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  // const filteredArray = courses.filter((course) => course.id === courseId);

  const getCourseById = async () => {
    let url = `http://localhost:8080/course/${courseId}`;
    const res = await fetch(url);
    const data = await res.json();
    setCourse(data);
  };

  useEffect(() => {
    getCourseById();
  }, []);

  return (
    <div>
      <Link to="/courses">
        <button>Back</button>
      </Link>
      <h1>{course.title}</h1>
      <h2>{course.category}</h2>
      <h3>{course.instructor}</h3>
      <p>{course.price}</p>
    </div>
  );
};

export default CourseInfo;
