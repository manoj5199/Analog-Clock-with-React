import { useEffect, useState } from "react";
import "./App.css";

const date = () => {
  return new Date();
};

const Clock = () => {
  const [time, setTime] = useState(date());
  const refreshClock = () => setTime(date());
  const sec = time.getSeconds();
  const min = time.getMinutes();
  const hrs = time.getHours();

  useEffect(() => {
    const intID = setInterval(() => {
      refreshClock();
    }, 1000);

    return () => {
      clearInterval(intID);
    };
  }, []);

  return (
    <div className={"clock"}>
      <div className={"analog-clock"}>
        <div
          className={"dial seconds"}
          style={{ transform: `rotate(${sec * 6}deg)` }}
        />
        <div
          className={"dial minutes"}
          style={{ transform: `rotate(${min * 6}deg)` }}
        />
        <div
          className={"dial hours"}
          style={{ transform: `rotate(${hrs * 30}deg)` }}
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;
