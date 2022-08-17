import styled from "styled-components";
import { IDiscussion } from "./Discussions";

const Img = styled.img`
  border-radius: 50%;
  width: 48px;
`;

const Li = styled.li`
  width: 540px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 10px 0px;
  background-color: white;
`;

const ContentBox = styled.div`
  width: 397px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const AnswerdBox = styled.div`
  font-size: 30px;
`;

interface IDiscussionProps {
  discussion: IDiscussion;
}

function Discussion({ discussion }: IDiscussionProps) {
  // console.log(discussion);
  return (
    <Li>
      <Wrapper>
        <Img src={discussion.avatarUrl} />
        <ContentBox>
          <h3>
            <a href={discussion.url}>{discussion.title}</a>
          </h3>
          <div>{`${discussion.author} / ${discussion.updatedAt}`}</div>
        </ContentBox>
        <AnswerdBox>☑</AnswerdBox>
      </Wrapper>
    </Li>
  );
}

export default Discussion;
