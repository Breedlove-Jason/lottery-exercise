import React, { useState } from "react";
import Ball from "../LottoBalls/Ball.component";
import "./Lottery.styles.css";
function Lottery(props) {
  const [lottoPick, setLottoPick] = useState({
    nums: Array.from({ length: props.maxBalls }),
  });
  function generate() {
    setLottoPick((prevState) => ({
      nums: prevState.nums.map(
        (n) => Math.floor(Math.random() * props.maxNum) + 1
      ),
    }));
  }
  function handleClick() {
    generate();
  }

  console.log(lottoPick);

  return (
    <section className="Lottery">
      <h1>{props.title}</h1>
      <div>
        {lottoPick.nums.map((n) => (
          <Ball num={n} />
        ))}
      </div>

      <button onClick={handleClick}>Generate</button>
    </section>
  );
}

export default Lottery;
