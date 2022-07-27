import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Form.scss";

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
    window.location.reload();
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1 className="form-title">Add a new Course</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form__input"
            type="text"
            placeholder="title"
            onInput={(event) =>
              setCourse({ ...course, title: event.target.value })
            }
          />
          <input
            className="form__input"
            type="text"
            placeholder="instructor"
            onInput={(event) =>
              setCourse({ ...course, instructor: event.target.value })
            }
          />
          <input
            className="form__input"
            type="text"
            placeholder="price"
            onInput={(event) =>
              setCourse({ ...course, price: parseFloat(event.target.value) })
            }
          />
          <input
            className="form__input"
            type="text"
            placeholder="category"
            onInput={(event) =>
              setCourse({ ...course, category: event.target.value })
            }
          />
          <button type="submit" className="form__submit">
            Submit
          </button>
        </form>
        <Link className="form__link" to={`/courses`}>
          Go to courses
        </Link>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Form;
