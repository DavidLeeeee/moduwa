import styled from "styled-components";

const FeedTopContainer = styled.div`
  display: flex;
  justify-content: center; // 세로 중앙 정렬
  align-items: center; // 가로 중앙 정렬
  font-size: 18px;
`;

const FeedTopbar = styled.div`
  display: flex;
  width: 430px;
  height: 60px;
  flex-direction: row;
  justify-content: space-between; // 세로 중앙 정렬
  align-items: center; // 가로 중앙 정렬
  background-color: pink;
  font-size: 1.2em;
`;

const Feedword = styled.div`
  font-size: 18px;
`;

function FeedTop() {
  return (
    <>
      <FeedTopContainer>
        <FeedTopbar>
          <Feedword>구독</Feedword>
          <p>모두의 판매자</p>
        </FeedTopbar>
      </FeedTopContainer>
    </>
  );
}

export default FeedTop;
