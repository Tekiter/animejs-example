import styled from "styled-components";
import { ItemListSection } from "./components/itemList";
import { ProgressMasterSection } from "./components/progressBarMaster";
import { ProgressSection } from "./components/progressBarPlain";
import { ProgressStyledSection } from "./components/progressBarStyled";

function App() {
  return (
    <Container>
      <ProgressSection />
      <ProgressStyledSection />
      <ProgressMasterSection />
      <ItemListSection />
    </Container>
  );
}

const Container = styled.div`
  width: 50em;
  margin: 0 auto;

  & > * {
    margin-top: 2em;
  }
`;

export default App;
