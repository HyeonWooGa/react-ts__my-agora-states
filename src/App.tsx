import styled from "styled-components";
import Discussions from "./components/Discussions";
import NewDiscussion from "./components/NewDiscussion";

const Container = styled.div`
  color: rgb(98, 124, 147);
  border: none;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <h1>My Agora States</h1>
      <NewDiscussion />
      <Discussions />
    </Container>
  );
}

export default App;
