"use client";
import Countdown from "react-countdown";

const CountDown = () => {
  return (
    <Countdown
      className='font-bold text-amber-300 text-5xl '
      date={Date.now() + 86400000 * 7}></Countdown>
  );
};
export default CountDown;
