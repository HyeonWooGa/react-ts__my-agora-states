import { useEffect, useState } from "react";
import styled from "styled-components";
import Discussion from "./Discussion";

const Container = styled.section`
  width: 540px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

export interface IDiscussion {
  nswer: object;
  author: string;
  avatarUrl: string;
  bodyHTML: string;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  url: string;
}

function Discussions() {
  const [discussions, setDiscussions] = useState<IDiscussion[]>();
  useEffect(() => {
    (async () => {
      const newDiscussions = await (
        await fetch("http://localhost:4000/discussions")
      ).json();
      //console.log(newDiscussions);
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
