import React from "react";

// connect されたものを受け取る
const App = ({ number, day, title, plus, minus }) => (
  <div>
    <h2>
      {title} {number} {day}
    </h2>
    <button
      onClick={() => {
        plus(10);
      }}
    >
      + 10
    </button>
    <button
      onClick={() => {
        minus(10);
      }}
    >
      - 10
    </button>
  </div>
);

export default App;
