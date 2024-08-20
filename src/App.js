import { useEffect, useState } from "react";
import "./App.css";
import photo from "./animal.jpg";

function App() {
  const [answer, setAnswer] = useState("");
  const [advice, setAdvice] = useState("");
  const [btn, setBtn] = useState("FIND ACTIVITY");

  useEffect(() => {
    const getAnswer = async () => {
      const response = await fetch("https://bored-api.appbrewery.com/random");
      const data = await response.json();
      setAnswer(data.activity);
      console.log(data);
    };
    getAnswer();
  }, [advice]);

  const getNewAnswer = () => {
    setAnswer(setAdvice);
    if (btn === "FIND ACTIVITY") {
      setBtn("TRY AGAIN");
    } else {
      setBtn("FIND ACTIVITY");
    }
  };

  return (
    <div className="container">
      <div>
        <img className="page_back" src={photo} alt="pic" />
      </div>
      <div className="container">
        <h1>What would you like to do when you are bored?</h1>
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
