import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Box, Section } from "./layout";

const OuterBar = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 10px;
`;

const InnerBar = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  transform-origin: left center;
  transform: scaleX(0);
`;

export function ProgressBarStyled({ progress = 0 }) {
  const barRef = useRef(null);
  const isInit = useRef(true);

  useEffect(() => {
    if (isInit.current) {
      anime({
        targets: barRef.current,
        scaleX: `0`,
        duration: 0,
      });
      isInit.current = false;
    } else {
      anime({
        targets: barRef.current,
        scaleX: `${progress / 100}`,
        easing: "easeOutBounce",
      });
    }
  }, [progress]);

  useEffect(() => {
    anime({});
  });

  return (
    <OuterBar>
      <InnerBar ref={barRef}></InnerBar>
    </OuterBar>
  );
}

export function ProgressStyledSection() {
  const [progress, setProgress] = useState(0);

  function onProgressChange(e) {
    const value = e.target.value;

    if (!isNaN(+value) && +value >= 0 && +value <= 100) {
      setProgress(+value);
    }
  }

  return (
    <Section>
      <h1>Progress Bar with styled-components</h1>
      <input type="text" onChange={onProgressChange} />
      <Box top="1em">
        <ProgressBarStyled progress={progress} />
      </Box>
    </Section>
  );
}
