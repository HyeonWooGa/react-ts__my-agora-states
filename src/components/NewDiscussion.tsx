import styled from "styled-components";

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
  return (
    <Container>
      <Form action="" method="get">
        <Wrapper>
          <NameAndTitle>
            <label htmlFor="name">Enter your name: </label>
            <input type="text" id="name" required />
          </NameAndTitle>
          <NameAndTitle>
            <label htmlFor="title">Enter your title: </label>
            <input type="text" id="title" required />
          </NameAndTitle>
          <LabelText htmlFor="question">Your Question: </LabelText>
          <TextArea id="question" placeholder="질문을 작성하세요" required />
        </Wrapper>
        <Button type="submit">입력</Button>
      </Form>
    </Container>
  );
}

export default NewDiscussion;
