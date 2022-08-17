import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  inputNameState,
  inputTitleState,
  inputContentState,
  discussionsState,
} from "../atoms";

const Container = styled.section`
  margin: 20px 0px 10px 0px;
  width: 540px;
  height: 130px;
  background-color: rgb(246, 239, 216);
  border-radius: 7px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

const NameAndTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 410px;
  margin-bottom: 4px;
  input {
    border: none;
    width: 250px;
  }
`;

const Wrapper = styled.div``;

const LabelText = styled.label`
  display: block;
`;

const TextArea = styled.textarea`
  width: 405px;
  height: 35px;
  border: none;
`;

const Button = styled.button`
  height: 100px;
  width: 90px;
  border-radius: 10%;
  background-color: rgb(252, 248, 244);
  color: rgb(98, 124, 147);
  border: none;
`;

function NewDiscussion() {
  const [inputName, setInputName] = useRecoilState(inputNameState);
  const [inputTilte, setInputTitle] = useRecoilState(inputTitleState);
  const [inputContent, setInputConTent] = useRecoilState(inputContentState);
  const [discussions, setDiscussions] = useRecoilState(discussionsState);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(`${inputName}`);
    // console.log(`${inputTilte}`);
    // console.log(`${inputContent}`);

    const newDiscussion = {
      answer: null,
      author: inputName,
      bodyHTML: inputContent,
      avatarUrl: "",
      createdAt: new Date().toISOString(),
      id: 11111,
      title: inputTilte,
      updatedAt: new Date().toISOString(),
      url: "https://velog.io/@HyeonWooGa",
    };

    setDiscussions([...discussions, newDiscussion]);

    console.log("new.tsx", discussions);
  };
  return (
    <Container>
      <Form action="" method="get" onSubmit={handleSubmit}>
        <Wrapper>
          <NameAndTitle>
            <label htmlFor="name">Enter your name: </label>
            <input
              onChange={(event) => setInputName(event.currentTarget.value)}
              type="text"
              id="name"
              required
            />
          </NameAndTitle>
          <NameAndTitle>
            <label htmlFor="title">Enter your title: </label>
            <input
              onChange={(event) => setInputTitle(event.currentTarget.value)}
              type="text"
              id="title"
              required
            />
          </NameAndTitle>
          <LabelText htmlFor="question">Your Question: </LabelText>
          <TextArea
            onChange={(event) => setInputConTent(event.currentTarget.value)}
            id="question"
            placeholder="질문을 작성하세요"
            required
          />
        </Wrapper>
        <Button type="submit">입력</Button>
      </Form>
    </Container>
  );
}

export default NewDiscussion;
