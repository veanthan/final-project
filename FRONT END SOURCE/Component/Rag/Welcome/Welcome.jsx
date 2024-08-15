import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to Our Website!</h1>
        <p>
          We connect individuals directly with certified recyclers to
          responsibly dispose of e-waste.
          <br />
          Join us in our mission to protect the environment and conserve
          resources for future generations.
        </p>

        <div className="change">
          <Link to="/consumersignin">
            <button className="solid">Consumers</button>
          </Link>
          <Link to="/signin">
            <button className="but">Ragpickers</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
