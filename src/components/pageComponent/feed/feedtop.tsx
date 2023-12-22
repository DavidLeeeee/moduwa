import styled from "styled-components";

const FeedTopContainer = styled.div`
  display: flex;
  justify-content: center; // 세로 중앙 정렬
  align-items: center; // 가로 중앙 정렬
`;

const FeedTopbar = styled.div`
  display: flex;
  width: 430px;
  height: 60px;
  flex-direction: row;
  justify-content: space-between; // 세로 중앙 정렬
  align-items: center; // 가로 중앙 정렬
  background-color: pink;
`;

function FeedTop() {
  return (
    <>
      <FeedTopContainer>
        <FeedTopbar>
          <p>구독</p>
          <p>모두의 판매자</p>
        </FeedTopbar>
      </FeedTopContainer>
    </>
  );
}

export default FeedTop;
