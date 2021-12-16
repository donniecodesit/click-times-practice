import React, {useState} from "react";
import TimestampsDisplay from "./TimestampsDisplay";

function ClickTimes() {
  const currTime = Date.now();
  const [results, setResults] = useState([]);
  const clickToTime = () => {
    setResults([...results, currTime]);
  }
  
  return <div>
      <button onClick={() => clickToTime()}>Click Me!</button>
      <TimestampsDisplay timestamps={results} />
  </div>
}

export default ClickTimes;
