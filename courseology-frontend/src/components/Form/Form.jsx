import { React, useState } from "react";

const Form = () => {
  const [course, setCourse] = useState({
    title: "",
    instructor: "",
    price: 10.99,
    category: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCourse({
      title: "Intro to Java",
      instructor: "Bob",
      price: 10.99,
      category: "back-end",
    });
  };
  console.log(course);
  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onInput={(event) => console.log(event.target.value)}
        />
        <input
          type="text"
          placeholder="instructor"
          onInput={(event) => console.log(event.target.value)}
        />
        <input
          type="text"
          placeholder="price"
          onInput={(event) => console.log(event.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          onInput={(event) => console.log(event.target.value)}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Form;
