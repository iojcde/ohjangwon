"use client";
import { useState } from "react";
import { addHeart } from "./op-hearts";

const Hearts = ({ oldhearts }: { oldhearts: number }) => {
  const [hearts, setHearts] = useState(oldhearts);
  return (
    <div
      className="my-4 space-x-2 flex
    "
    >
      <button
        onClick={async () => {
          setHearts(await addHeart());
        }}
      >
        ❤️
      </button>
      <div>{hearts}</div>
    </div>
  );
};

export default Hearts;
