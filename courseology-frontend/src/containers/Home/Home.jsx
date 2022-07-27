import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DevGraphic from "../../assets/images/devop-graphic.svg";
import "./Home.scss";

const Home = () => {
  const [randomCourse, setRandomCourses] = useState({});

  const getCourses = async () => {
    let url = "http://localhost:8080/random";
    const res = await fetch(url);
    const data = await res.json();
    setRandomCourses(data);
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="home">
      <img
        className="home__image"
        src={DevGraphic}
        alt="Developer on computer graphic"
      />
      <div className="home__content">
        <h1 className="home__title">Courseology</h1>
        <h2 className="home__subheading">Why not try:</h2>
        <h3 className="home__course">{randomCourse.title}</h3>
        <Link to={`courses/${randomCourse.id}`}>
          <button className="home__button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
