import styled from "styled-components";
import { ItemListSection } from "./components/itemList";
import { ItemTabSection } from "./components/itermTab";
import { ProgressMasterSection } from "./components/progressBarMaster";
import { ProgressSection } from "./components/progressBarPlain";
import { ProgressStyledSection } from "./components/progressBarStyled";

function App() {
  return (
    <Container>
      <ProgressSection />
      <ProgressStyledSection />
      <ProgressMasterSection />
      <ItemTabSection />
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
