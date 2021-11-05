import styled from "styled-components";

export const Box = styled.div`
  margin-top: ${(props) => props.top ?? "0"};
  margin-bottom: ${(props) => props.bottom ?? "0"};
  margin-left: ${(props) => props.left ?? "0"};
  margin-right: ${(props) => props.right ?? "0"};
`;

export const Section = styled.section`
  & > h1 {
    font-size: 1.5em;
  }
`;
