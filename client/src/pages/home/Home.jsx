import React from "react";
import "./home.scss";
import SearchBar from "../../components/searchBar/SearchBar";

const Home = () => {
  return (
    <div className="home">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>

          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur non laudantium natus blanditiis quas. Nihil quidem
            necessitatibus voluptatem voluptates debitis sed eos voluptate?
            Inventore, dolore!
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
            </div>

            <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
            </div>

            <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src="../images/bg.png" alt="background image" />
      </div>
    </div>
  );
};

export default Home;
