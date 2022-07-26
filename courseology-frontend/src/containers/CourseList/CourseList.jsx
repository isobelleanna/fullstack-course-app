import { useState } from "react";
import Card from "../../components/Card/Card";
import Searchbox from "../../components/Searchbox/Searchbox";
import { Link } from "react-router-dom";

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
    <div>
      <Searchbox handleInput={handleSearchInput} searchTerm={searchTerm} />
      {filterBySearch.map((course, index) => (
        <Link to={`/courses/${course.id}`} key={index}>
          <Card
            title={course.title}
            category={course.category}
            instructor={course.instructor}
            price={course.price}
          />
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
