"use client";
import dynamic from "next/dynamic";

export const Countdownthing = dynamic(() => import("react-countdown"), {
  ssr: false,
});

const Countdown = () => {
  return (
    <Countdownthing
      renderer={({ days, hours, minutes, seconds }) => {
        return (
          <p className="text-sm font-bold">
            {days}일 {hours}시간 {minutes}분 {seconds}초 남았습니다.
          </p>
        );
      }}
      date={new Date(2023, 8, 1)}
    ></Countdownthing>
  );
};

export default Countdown;
