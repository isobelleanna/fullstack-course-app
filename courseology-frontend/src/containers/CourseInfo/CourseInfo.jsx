import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./CourseInfo.scss";

const CourseInfo = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

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
    <div className="course-info">
      <Link to="/courses">
        <button className="course-info__button">Back</button>
      </Link>
      <div className="course-info__main">
        <div className="course-info__content">
          <h1 className="course-info__title">{course.title}</h1>
          <h2 className="course-info__category">{course.category}</h2>
          <h3 className="course-info__instructor">{course.instructor}</h3>
          <p className="course-info__price">{course.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
