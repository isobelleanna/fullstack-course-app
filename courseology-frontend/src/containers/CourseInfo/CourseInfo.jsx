import React from "react";
import { useParams } from "react-router";

const CourseInfo = ({ courses }) => {
  const { courseId } = useParams();
  console.log(courseId);
  const filteredArray = courses.filter((course) => course.id === courseId);
  //console.log(courses);
  console.log(filteredArray);
  return (
    <div>
      <h1>{filteredArray[0].title}</h1>
      <h2>{filteredArray[0].category}</h2>
      <h3>{filteredArray[0].instructor}</h3>
      <p>{filteredArray[0].price}</p>
    </div>
  );
};

export default CourseInfo;
