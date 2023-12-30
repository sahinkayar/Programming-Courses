import React from "react";
import Course from "./Course";
import "../app.css";
function Courses({ CourseDatas, DeleteCourse }) {
  return (
    <div className="Main-div">
      <div>
        <h2 className="Title">My Courses</h2>
      </div>
      <div className="Main-Card">
        {CourseDatas.map((course, index) => {
          return (
            <Course key={index} course={course} RemoveFunc={DeleteCourse} />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
