import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { discussionsState, IDiscussion } from "../atoms";
import Discussion from "./Discussion";

const Container = styled.section`
  width: 540px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

function Discussions() {
  const [discussions, setDiscussions] =
    useRecoilState<IDiscussion[]>(discussionsState);
  useEffect(() => {
    (async () => {
      const newDiscussions = await (
        await fetch("http://localhost:4000/discussions")
      ).json();
      console.log(newDiscussions);
      setDiscussions(newDiscussions);
    })();
  }, []);
  // console.log(discussions);
  return (
    <Container>
      <Ul>
        {discussions?.map((discussion: IDiscussion) => {
          return <Discussion key={discussion.id} discussion={discussion} />;
        })}
      </Ul>
    </Container>
  );
}

export default Discussions;
