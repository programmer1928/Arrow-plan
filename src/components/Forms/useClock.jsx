import { useReducer } from "react";

function reducer(clock, action) {
  switch (action.type) {
    case "min":
      return { ...clock, min: action.payload };
    case "hour":
      return { ...clock, hour: action.payload };
    case "reset":
      return { min: 0, hour: 0 };
    default:
      return clock;
  }
}

export default function useClock() {
  const [clock, dispatchClock] = useReducer(reducer, { min: 0, hour: 0 });

  const totalMinutes = clock.min + clock.hour * 60;

  return [clock, dispatchClock, totalMinutes];
}
