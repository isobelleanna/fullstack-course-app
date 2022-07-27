import { useState } from "react";
import Card from "../../components/Card/Card";
import Searchbox from "../../components/Searchbox/Searchbox";
import { Link } from "react-router-dom";
import "./CourseList.scss";

const CourseList = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  const filterBySearch = courses.filter((course) => {
    const titleLower = course.title.toLowerCase();
    return titleLower.includes(searchTerm);
  });

  return (
    <div className="course-list">
      <div className="course-list__filters">
        <Searchbox handleInput={handleSearchInput} searchTerm={searchTerm} />
      </div>
      <div className="course-list__content">
        {filterBySearch.map((course, index) => (
          <Link
            to={`/courses/${course.id}`}
            key={index}
            className="course-list__link"
          >
            <Card title={course.title} price={course.price} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
