"use client";
import Countdownthing from "react-countdown";

const Countdown = () => {
  return (
    <Countdownthing
      renderer={({ days, hours, minutes, seconds }) => {
        return (
          <p className="text-sm font-bold">
            이별까지 {days}일 {hours}시간 {minutes}분 {seconds}초 남았습니다.
          </p>
        );
      }}
      date={new Date(2023, 8, 1)}
    ></Countdownthing>
  );
};

export default Countdown;
