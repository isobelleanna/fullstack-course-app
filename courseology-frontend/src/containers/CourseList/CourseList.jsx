import { useState } from "react";
import Card from "../../components/Card/Card";
import Searchbox from "../../components/Searchbox/Searchbox";

const CourseList = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (courses.length > 0) {
    console.log(courses[0].title);
  }
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
        <Card
          key={index}
          title={course.title}
          category={course.category}
          instructor={course.instructor}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default CourseList;
