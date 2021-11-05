import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import { Box, Section } from "./layout";

export function ProgressBar({ progress = 0 }) {
  const barRef = useRef(null);

  useEffect(() => {
    anime({
      targets: barRef.current,
      scaleX: `${progress / 100}`,
      easing: "easeOutBounce",
    });
  }, [progress]);

  return (
    <div
      style={{ width: "100%", backgroundColor: "lightgray", height: "10px" }}
    >
      <div
        ref={barRef}
        style={{
          backgroundColor: "blue",
          width: "100%",
          height: "100%",
          transformOrigin: "left center",
        }}
      ></div>
    </div>
  );
}

export function ProgressSection() {
  const [progress, setProgress] = useState(0);

  function onProgressChange(e) {
    const value = e.target.value;

    if (!isNaN(+value) && +value >= 0 && +value <= 100) {
      setProgress(+value);
    }
  }

  return (
    <Section>
      <h1>Progress Bar Plain</h1>
      <input type="text" onChange={onProgressChange} />
      <Box top="1em">
        <ProgressBar progress={progress} />
      </Box>
    </Section>
  );
}
