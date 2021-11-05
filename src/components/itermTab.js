import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Section } from "./layout";

const TAB_WIDTH = 100;

const TabContainer = styled.div`
  display: flex;
`;

const TabItem = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  font-size: 1.1em;
  font-weight: 600;
  width: ${TAB_WIDTH}px;
  color: ${(props) => (props.isSelected ? "black" : "lightgray")};

  box-sizing: border-box;

  &:hover {
    color: gray;
  }
`;

const BottomBar = styled.div`
  height: 5px;
  width: ${TAB_WIDTH}px;
  background-color: black;

  box-sizing: border-box;
`;

export function ItemTab({ tabs }) {
  const barRef = useRef(null);
  const [selected, setSelected] = useState(0);

  useTabSwitch(barRef, selected);

  return (
    <div>
      <TabContainer>
        {tabs.map((tab, idx) => (
          <TabItem
            key={tab.key}
            isSelected={selected === idx}
            onClick={() => setSelected(idx)}
          >
            {tab.header}
          </TabItem>
        ))}
      </TabContainer>
      <BottomBar ref={barRef} />
    </div>
  );
}

function useTabSwitch(barRef, selected) {
  useEffect(() => {
    anime({
      targets: barRef.current,
      translateX: `${TAB_WIDTH * selected}px`,
      easing: "easeOutBack",
      duration: 300,
    });
  }, [selected]);
}

export function ItemTabSection() {
  const tabs = [
    {
      header: "HOME",
      key: "home",
    },
    {
      header: "USER",
      key: "user",
    },
    {
      header: "ADMIN",
      key: "admin",
    },
  ];

  return (
    <Section>
      <h1>Tab</h1>

      <ItemTab tabs={tabs} />
    </Section>
  );
}
