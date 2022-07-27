import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Form.scss";

const Form = ({ courses }) => {
  const [course, setCourse] = useState({
    title: "",
    instructor: "",
    price: 10.99,
    category: "",
  });
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  const handleDeleteSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const filteredCourse = courses.filter(
      (course) => course.title === event.target[0].value
    );
    sendDeleteRequest(filteredCourse[0].id);
    event.target.reset();
  };

  const sendDeleteRequest = async (id) => {
    let url = `http://localhost:8080/course/${id}`;
    const res = await fetch(url, { method: "DELETE" });
    const message = await res.text();
    setAlert(message);
    window.location.reload();
  };

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
      <div className="form-box">
        <h2 className="form-title">Delete a Course</h2>
        <form className="form" onSubmit={handleDeleteSubmit}>
          <input
            list="course-titles"
            name="course-titles"
            id="course-title"
          ></input>
          <datalist id="course-titles">
            {courses.map((course, index) => (
              <option key={index} id={course.id} name={course.title}>
                {course.title}
              </option>
            ))}
          </datalist>
          <button type="submit" className="form__submit">
            Submit
          </button>
        </form>
        <p>{alert}</p>
      </div>
    </div>
  );
};

export default Form;
