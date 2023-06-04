import { useState } from "react";
import "./App.css";

function App() {
  const [data, SetData] = useState({
    first: ["Ram", "Shyam", "Sundar", "Vishwa", "Shiva"],
    second: [],
    third: [],
    fourth: [],
    fifth: [],
  });

  const [check, setCheck] = useState("");

  const onDrag = (e, val, type) => {
    console.log("drag", val, type, data[type]);
    const value = data[type].filter((cc) => cc !== val);
    setCheck(val);
    SetData({ ...data, [type]: value });
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };
  const onDrop = (event, type) => {
    // console.log("Drop Event Called", type, data[type]);
    SetData({ ...data, [type]: [...data[type], check] });
    setCheck("");
  };

  const onDragEnter = (event) => {
    event.preventDefault();
    event.target.className += " hello";
  };
  const onDragLeave = (event) => {
    event.preventDefault();
    console.log("check", event.target.className);
    if (event.target.className.includes("item")) {
      event.target.className = "item";
    } else {
      event.target.className = "section";
    }
  };

  return (
    <div className="main-section">
      <h2>React Drag Drop Functionality</h2>
      <main className="main-content">
        <div
          className="section"
          onDragOver={(event) => onDragOver(event)}
          onDragEnter={(event) => onDragEnter(event)}
          onDragLeave={(event) => onDragLeave(event)}
          onDrop={(event) => onDrop(event, "first")}
        >
          {data.first.map((item) => (
            <div
              className="item"
              key={item}
              draggable
              onDrag={(event) => onDrag(event, item, "first")}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className="section"
          onDragOver={(event) => onDragOver(event)}
          onDragEnter={(event) => onDragEnter(event)}
          onDragLeave={(event) => onDragLeave(event)}
          onDrop={(event) => onDrop(event, "second")}
        >
          {data.second.map((item) => (
            <div
              className="item"
              key={item}
              draggable
              onDrag={(event) => onDrag(event, item, "second")}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className="section"
          onDragOver={(event) => onDragOver(event)}
          onDragEnter={(event) => onDragEnter(event)}
          onDragLeave={(event) => onDragLeave(event)}
          onDrop={(event) => onDrop(event, "third")}
        >
          {data.third.map((item) => (
            <div
              className="item"
              key={item}
              draggable
              onDrag={(event) => onDrag(event, item, "third")}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className="section"
          onDragOver={(event) => onDragOver(event)}
          onDragEnter={(event) => onDragEnter(event)}
          onDragLeave={(event) => onDragLeave(event)}
          onDrop={(event) => onDrop(event, "fourth")}
        >
          {data.fourth.map((item) => (
            <div
              className="item"
              key={item}
              draggable
              onDrag={(event) => onDrag(event, item, "fourth")}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className="section"
          onDragOver={(event) => onDragOver(event)}
          onDragEnter={(event) => onDragEnter(event)}
          onDragLeave={(event) => onDragLeave(event)}
          onDrop={(event) => onDrop(event, "fifth")}
        >
          {data.fifth.map((item) => (
            <div
              className="item"
              key={item}
              draggable
              onDrag={(event) => onDrag(event, item, "fifth")}
            >
              {item}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
