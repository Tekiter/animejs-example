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
  background-color: red;
  width: 0%;
  height: 100%;
  overflow: hidden;
`;

const GlowBar = styled.div`
  width: 80px;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgb(255, 255, 255, 0) 10%,
    rgb(255, 255, 255, 0.9) 50%,
    rgb(255, 255, 255, 0) 90%
  );
`;

export function ProgressBarMaster({ progress = 0 }) {
  const barRef = useRef(null);
  const glowRef = useRef(null);

  useProgressAnimation(barRef, progress);
  useProgressGlowAnimation(glowRef);

  return (
    <OuterBar>
      <InnerBar ref={barRef}>
        <GlowBar ref={glowRef} />
      </InnerBar>
    </OuterBar>
  );
}

function useProgressAnimation(ref, progress) {
  const isInit = useRef(true);
  useEffect(() => {
    if (isInit.current) {
      anime({
        targets: ref.current,
        width: `0%`,
        duration: 0,
      });
      isInit.current = false;
    } else {
      anime({
        targets: ref.current,
        width: `${progress}%`,
        easing: "easeOutBounce",
      });
    }
  }, [progress, ref]);
}

function useProgressGlowAnimation(ref) {
  useEffect(() => {
    anime({
      targets: ref.current,
      translateX: ["0vw", "100vw"],
      easing: "linear",
      loop: true,
      duration: 4000,
    });
  });
}

export function ProgressMasterSection() {
  const [progress, setProgress] = useState(0);

  function onProgressChange(e) {
    const value = e.target.value;

    if (!isNaN(+value) && +value >= 0 && +value <= 100) {
      setProgress(+value);
    }
  }

  return (
    <Section>
      <h1>Progress Bar like PRO</h1>
      <input type="text" onChange={onProgressChange} />
      <Box top="1em">
        <ProgressBarMaster progress={progress} />
      </Box>
    </Section>
  );
}
