import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Timer } from "./Timer";
const TimersList: React.FC = () => {
  const [allTimer, setTimer] = React.useState<string[]>([]);

  function addTimer() {
    const idTimer = uuidv4();
    setTimer([...allTimer, idTimer]);
  }

  return (
    <div>
      <p></p>
      <ul className="list-group timers-list">
        <li className="list-group-item text-center">
          <button id={uuidv4()} onClick={addTimer} className="btn btn-primary">
            Add a timer
          </button>
        </li>
        {allTimer.map((element) => {
          return <Timer key={element} timerId={element} removeTimer={element} />;
        })}
      </ul>
    </div>
  );
};

export default TimersList;
