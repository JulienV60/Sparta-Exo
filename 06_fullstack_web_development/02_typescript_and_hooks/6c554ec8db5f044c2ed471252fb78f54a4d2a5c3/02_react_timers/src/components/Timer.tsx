import React from "react";

type TimerProps = {
  timerId: string;
  removeTimer: string;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  const [time, setTime] = React.useState(1);
  React.useEffect(() => {
    timed;
  }, [time]);
  const timed = setTimeout(() => setTime(time + 1), 1000);
  function delTimer(event: any) {
    const result = event.target.parentNode;
    result.remove();
    clearTimeout(timed);
  }

  return (
    <li className="list-group-item d-flex align-items-center  justify-content-between">
      <p className="text-center">{time} seconds</p>
      <div className="btn btn-danger" onClick={delTimer}>
        Delete
      </div>
    </li>
  );
};
