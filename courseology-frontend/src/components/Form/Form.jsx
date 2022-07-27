import { React, useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [course, setCourse] = useState({
    title: "",
    instructor: "",
    price: 10.99,
    category: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let url = "http://localhost:8080/course";
    try {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(course),
      });
      setMessage("ok");
    } catch (err) {
      setMessage("Error");
    }
    event.target.reset();
  };

  return (
    <div>
      <h1>Add a new Course</h1>
      <form onSubmit={handleSubmit}>
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
            setCourse({ ...course, price: parseFloat(event.target.value) })
          }
        />
        <input
          type="text"
          placeholder="category"
          onInput={(event) =>
            setCourse({ ...course, category: event.target.value })
          }
        />
        {/* <Link to="/courses/"> */}
        <button type="submit" className="btn">
          Submit
        </button>
        {/* </Link> */}
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Form;
