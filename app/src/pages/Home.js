import React from "react";
import logo from "../assets/img1.png"; // Import the logo

const Home = () => {
  return (
    <div className="container">
      <img src={logo} alt="Sehat Sangh Logo" className="logo" />
      <h1>Welcome to Sehat Sangh</h1>
      <p>Your unified digital platform for fitness and health.</p>
    </div>
  );
};

export default Home;
