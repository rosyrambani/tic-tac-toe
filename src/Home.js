import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <div className="jumbotron">
        <div className="row">
          <div className="img-responsive mx-auto">
            <img
              alt="Circle Cardiovascular Imaging"
              className="img-responsive text-center"
              src="./assets/img/brand/logo.png"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <p className="mx-auto">
          <Link className="btn btn-success btn-lg" to="/game">
            Play Game
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
