import "../app.css";

function Course({ course, RemoveFunc }) {
  const myid = course.id;

  return (
    <div className="My-Card">
      <h2>{course.title} </h2>
      <h4 className="Price">{course.price} TL</h4>
      <p>{course.content}</p>
      <div className="Btn-Div">
        <button
          onClick={() => {
            RemoveFunc(myid);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Course;
