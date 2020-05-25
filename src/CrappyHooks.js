import React from "react";
import ReactDOM from "react-dom";
import "./CrappyHooks.css";
import { FaMinus, FaPlus } from "react-icons/fa";

// <----------- Crappy Hooks Start ---------->

const states = [];
let calls = -1;

function useState(defaultvalue) {
  const callId = ++calls;
  if (states[callId]) {
    return states[callId];
  }
  const setValue = (newValue) => {
    states[callId][0] = newValue;
    renderWithCrappyHooks();
  };
  const tuple = [defaultvalue, setValue];
  states[callId] = tuple;
  return tuple;
}
function renderWithCrappyHooks() {
  calls = -1;
  ReactDOM.render(<CrappyHooks />, document.getElementById("root"));
}
renderWithCrappyHooks();

// <------ END ------>

// <-------- Component Start -------->
export default function CrappyHooks() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  function handleMinus() {
    if (count !== 0 && count <= 9) {
      setCount(count - 1);
      setError(null);
    } else setError("Greater than 0 Please");
  }
  function handleAdd() {
    if (count < 9) {
      setCount(count + 1);
      setError(null);
    } else setError("Less than 10 Please");
  }

  return (
    <>
      <div className="container">
        <button className="btn" onClick={() => handleMinus()}>
          <FaMinus />
        </button>
        <span>Counter : {count}</span>
        <button className="btn" onClick={() => handleAdd()}>
          <FaPlus />
        </button>
      </div>
      <p className="error">{error}</p>
    </>
  );
}
// <--------- Component End ---------->
