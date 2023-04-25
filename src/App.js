import "./styles.css";
import { useState } from "react";

//footnotes make the buttons thee size of the wrapping ellement
export default function App() {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState(0);

  function handleClick(num) {
    setInput((prevState) => {
      return [...prevState, num];
    });
  }
  const handleClear = () => {
    setInput([]);
    setOutput(0);
  };
  const handleOperatorClick = (operand) => {
    twoOperands();
    if (output) {
      setInput([output, operand]);
      setOutput(0);
    } else if (
      input[input.length - 1] === "+" ||
      input[input.length - 2] === "+" ||
      input[input.length - 1] === "-" ||
      input[input.length - 2] === "-" ||
      input[input.length - 1] === "*" ||
      input[input.length - 2] === "*" ||
      input[input.length - 1] === "/" ||
      input[input.length - 2] === "/"
    ) {
      setInput((prevState) => {
        let vals = prevState.slice(
          0,
          prevState.length - 1
        );
        return [...vals, operand];
      });
    } else if (
      input.length !== 0 &&
      input[input.length - 1] !== operand &&
      input[input.length - 2] !== operand
    ) {
      setInput([...input, operand]);
    }
  };

  const twoOperands = () => {
    if (
      (input[input.length - 2] === "+" &&
        input[input.length - 1] === "-") ||
      (input[input.length - 2] === "/" &&
        input[input.length - 1] === "-") ||
      (input[input.length - 2] === "*" &&
        input[input.length - 1] === "-") ||
      (input[input.length - 2] === "-" &&
        input[input.length - 1] === "-") ||
      (input[input.length - 2] === "-" &&
        input[input.length - 1] === "+")
    ) {
      let val = input.slice(0, input.length - 1);
      setInput([...val]);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="display">
          <div className="formulaScreen" id="display">
            {input.length <= 0 ? 0 : input}
          </div>
          <div id="display" className="outputScreen">
            {output}
          </div>
        </div>
        <div className="btn-wrapper">
          <div className="clear">
            <button id="clear" onClick={handleClear}>
              AC
            </button>
          </div>
          <div className="division">
            <button
              id="divide"
              onClick={() => {
                handleOperatorClick("/");
              }}
            >
              /
            </button>
          </div>
          <div className="times">
            <button
              id="multiply"
              onClick={() => handleOperatorClick("*")}
            >
              X
            </button>
          </div>
          <div className="seven">
            <button
              id="seven"
              onClick={() => handleClick(7)}
            >
              7
            </button>
          </div>
          <div className="eight">
            <button
              id="eight"
              onClick={() => handleClick(8)}
            >
              8
            </button>
          </div>
          <div className="nine">
            <button
              id="nine"
              onClick={() => handleClick(9)}
            >
              9
            </button>
          </div>
          <div className="minus">
            <button
              id="subtract"
              onClick={() => {
                // handleClick("-")
                if (output) {
                  setInput([output, "-"]);
                  setOutput(0);
                }
                if (
                  input.length !== 0 &&
                  input[input.length - 2] !== "-" &&
                  input[input.length - 2] !== "*" &&
                  input[input.length - 2] !== "/" &&
                  input[input.length - 2] !== "+"
                ) {
                  setInput([...input, "-"]);
                }
              }}
            >
              -
            </button>
          </div>
          <div className="four">
            <button
              id="four"
              onClick={() => handleClick(4)}
            >
              4
            </button>
          </div>
          <div className="five">
            <button
              id="five"
              onClick={() => handleClick(5)}
            >
              5
            </button>
          </div>
          <div className="six">
            <button
              id="six"
              onClick={() => handleClick(6)}
            >
              6
            </button>
          </div>
          <div className="add">
            <button
              id="add"
              onClick={() => {
                handleOperatorClick("+");
                //   if (input[input.length - 1] !== "+") {
                //     if (output) {
                //       setInput([output, "+"]);
                //       setOutput(0);
                //     } else if (input.length !== 0) {
                //       setInput([...input, "+"]);
                //     }
                //   }
                // }
              }}
            >
              +
            </button>
          </div>
          <div className="one">
            <button
              id="one"
              onClick={() => handleClick(1)}
            >
              1
            </button>
          </div>
          <div className="two">
            <button
              id="two"
              onClick={() => handleClick(2)}
            >
              2
            </button>
          </div>
          <div className="three">
            <button
              id="three"
              onClick={() => handleClick(3)}
            >
              3
            </button>
          </div>
          <div className="equal">
            <button id="equals" onClick={() => {}}>
              =
            </button>
          </div>
          <div className="zero">
            <button
              id="zero"
              onClick={
                input.length !== 0
                  ? () => handleClick("0")
                  : () => input
              }
            >
              0
            </button>
          </div>
          <div className="period">
            <button
              id="decimal"
              onClick={
                input.length === 0
                  ? () => handleClick("0.")
                  : input.indexOf(".") === -1
                  ? () => handleClick(".")
                  : () => input
              }
            >
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
