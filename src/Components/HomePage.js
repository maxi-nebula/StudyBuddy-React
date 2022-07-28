import React from "react";
import ImageBox from "./ImageBox";
import "./HomePage.css";
import "../App.css";
import TodoBox from "./TodoComponents/TodoBox";

const HomePage = () => {
  return (
    <div className="App">
      <TodoBox />

      <ImageBox />
    </div>
  );
};
export default HomePage;
