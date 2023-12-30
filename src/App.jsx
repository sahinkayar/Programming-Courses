import React, { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./components/Courses";
import Loading from "./components/Loading";
import "./app.css";
function App() {
  const [mydatas, Setmydatas] = useState([]);
  const [loading, SetLoading] = useState(true);

  const fetchTasks = async () => {
    SetLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      Setmydatas(response.data);
      SetLoading(false);
    } catch (error) {
      SetLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  const DeleteCourse = (id) => {
    const Deletingdata = mydatas.filter((course) => {
      return course.id !== id;
    });
    Setmydatas(Deletingdata);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {mydatas.length === 0 ? (
            <div className="Reload-Div">
              <h1>You Deleted all the Courses!</h1>
              <button
                onClick={() => {
                  fetchTasks();
                }}
              >
                Reload
              </button>
            </div>
          ) : (
            <Courses CourseDatas={mydatas} DeleteCourse={DeleteCourse} />
          )}{" "}
        </div>
      )}
    </div>
  );
}

export default App;
