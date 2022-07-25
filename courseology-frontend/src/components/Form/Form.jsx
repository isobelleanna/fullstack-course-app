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
    let url = "http://localhost:8080/course";
  };
  console.log(course);
  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onInput={(event) =>
            setCourse({ ...course, title: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="instructor"
          onInput={(event) =>
            setCourse({ ...course, instructor: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="price"
          onInput={(event) =>
            setCourse({ ...course, price: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="category"
          onInput={(event) =>
            setCourse({ ...course, category: event.target.value })
          }
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
