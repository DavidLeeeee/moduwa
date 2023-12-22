import styled from "styled-components";

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(120, 250, 255);
  width: 95%;
  max-width: 420px;
  height: 120px;
  margin: 0 auto; // 가운데 정렬
  padding: 0px; // 패딩 설정
`;

const MainEventBox = styled.div`
  width: 100%;
  height: 90px;
  background-color: rgb(200, 0, 0);
`;
const BottomEventBox = styled.div`
  flex-direction: row;
  width: 100%;
  height: 30px;
  background-color: rgb(0, 0, 200);
`;

function eventBox() {
  return (
    <>
      <EventContainer>
        <MainEventBox />
        <BottomEventBox></BottomEventBox>
      </EventContainer>
    </>
  );
}

export default eventBox;
