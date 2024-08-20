import { useEffect, useState } from "react";
import "./App.css";
import cat from "./cat.jpg";

function App() {
  const [answer, setAnswer] = useState("");
  const [advice, setAdvice] = useState("");
  const [btn, setBtn] = useState("FIND a FACT");

  useEffect(() => {
    const getAnswer = async () => {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setAnswer(data.fact);
    };
    getAnswer();
  }, [advice]);

  const getNewAnswer = () => {
    setAnswer(setAdvice);
    if (btn === "FIND a FACT") {
      setBtn("TRY AGAIN");
    } else {
      setBtn("FIND a FACT");
    }
  };

  return (
    <div className="container">
      <div>
        <img className="page_back" src={cat} alt="pic" />
      </div>
      <div className="container">
        <h1>What do you know about cats? 😼</h1>
        <p>{answer}</p>
        <p></p>
      </div>
      <div className="btn">
        <button onClick={getNewAnswer}>{btn}</button>
      </div>
    </div>
  );
}

export default App;
