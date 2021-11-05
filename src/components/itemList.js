import anime from "animejs";
import { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Section } from "./layout";

const ListContainer = styled.div`
  width: 15em;
  min-height: 10em;
  background-color: #f3f3f3;
  padding: 0.5em;
`;

const ListItemContainer = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.3em 0.5em;
  margin-bottom: 0.3em;
`;

function ItemList({ list = [] }) {
  const itemRefs = useRef([]);
  const wave = useItemWaveRunner(itemRefs);

  function handleClick(idx) {
    return function () {
      wave(idx);
    };
  }

  return (
    <ListContainer>
      {list.map((item, idx) => (
        <ListItem
          key={item.id}
          ref={(el) => (itemRefs.current[idx] = el)}
          content={item.content}
          onClick={handleClick(idx)}
        />
      ))}
    </ListContainer>
  );
}

function useItemWaveRunner(itemRefs) {
  return function (startIdx) {
    anime({
      targets: itemRefs.current,
      keyframes: [
        {
          opacity: anime.stagger([0.6, 1], { from: startIdx }),
          scale: anime.stagger([0.95, 1], { from: startIdx }),
          duration: 500,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 500,
        },
      ],
      delay: anime.stagger(100, { from: startIdx }),
    });
  };
}

const ListItem = forwardRef(function ListItem({ content, onClick }, ref) {
  return (
    <ListItemContainer ref={ref} onClick={onClick}>
      {content}
    </ListItemContainer>
  );
});

export function ItemListSection() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const serial = useRef(0);

  function addList() {
    const item = {
      id: serial.current++,
      content: input,
    };
    setList((list) => [...list, item]);
    setInput("");
  }

  function popList() {
    setList((list) => list.slice(0, list.length - 1));
  }

  useEffect(() => {
    const tmpList = [];
    for (let i = 0; i < 10; i++) {
      tmpList.push({
        id: serial.current++,
        content: `Item ${i + 1}`,
      });
    }
    setList(tmpList);
  }, []);

  return (
    <Section>
      <h1>Item List Animation</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addList}>PUSH</button>
        <button onClick={popList}>POP</button>
      </div>
      <ItemList list={list} />
    </Section>
  );
}
