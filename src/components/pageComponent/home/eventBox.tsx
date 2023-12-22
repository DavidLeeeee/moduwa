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
  margin-bottom: 20px;
  border: 1px solid #000000;
  font-size: 16px;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainEventBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 10px; // 내부 패딩 추가
  background-color: rgb(255, 255, 255);
`;

//이벤트가게 이미지
const EventImage = styled.img`
  width: 80px;
  height: 80px; // 이미지 높이를 조정
  margin-right: 14px;
  object-fit: cover; // 이미지 비율 유지
`;
//이벤트가게 이름
const EventName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 180px;
  background-color: #ffffff;
  color: rgb(20, 20, 20);
  font-weight: 600;
  font-size: 1.2em;
  margin: 5px 0; // 여백 조정
`;
//거리(m/km)
const EventLocation = styled.div`
  font-weight: normal;
  font-size: 0.8em;
  font-weight: 500;
  color: rgb(80, 80, 80);
  margin-left: 0px; // 이름과 위치 사이의 간격
`;

const EventDate = styled.div`
  color: rgb(20, 20, 20);
  font-size: 0.9em;
`;
const EventTime = styled.div`
  color: rgb(20, 20, 20);
  font-size: 1em;
`;
const Deadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; // 컨텐츠를 공간에 균등하게 분배
  margin-right: 10px;
  width: 60px;
  color: rgb(200, 15, 15);
`;
const PromptText = styled.div`
  font-size: 0.8em; // 더 작은 글씨 크기
`;
const DeadlineTime = styled.div`
  font-size: 1.2em; // 더 큰 글씨 크기
`;

const PickRoute = styled.div`
  display: flex;
  flex-direction: column; // 세로 방향 정렬
  align-items: center; // 가로축 중앙 정렬
  justify-content: center; // 세로축 중앙 정렬
  height: 100%; // 부모 컨테이너 높이에 맞게 조정
  border: 1px solid #333333;
  padding: 0 10px;
  margin-left: auto; // 왼쪽에 있는 모든 요소를 밀어내고 오른쪽으로 이동
`;

const BottomEventBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  background-color: rgb(240, 240, 240);
`;

interface Event {
  image: string;
  name: string;
  location: number;
  eventDate: string;
  eventStartTime: string;
  eventEndTime: string;
  joinDeadlineDate: string;
  joinDeadlineTime: string;
  menu: string[];
  originPrice: number;
  salePrice: number;
  minimumJoin: number;
  nowJoin: number;
  maximumJoin: number;
  pickType: string[];
}
interface EventBoxProps {
  event: Event; // 여기서 Event는 위에서 정의한 인터페이스
}

const EventBox: React.FC<EventBoxProps> = ({ event }) => {
  return (
    <EventContainer>
      <MainEventBox>
        <EventImage src={event.image} alt={event.name} />
        <ColumnBox>
          <EventName>
            {event.name} <EventLocation>{event.location}m</EventLocation>
          </EventName>
          <RowBox>
            <ColumnBox>
              <EventDate>{event.eventDate}</EventDate>
              <EventTime>
                {event.eventStartTime} ~ {event.eventEndTime}
              </EventTime>
            </ColumnBox>
            <Deadline>
              <PromptText>서둘러요</PromptText>
              <DeadlineTime>{event.joinDeadlineTime}</DeadlineTime>
            </Deadline>
          </RowBox>
        </ColumnBox>
        <PickRoute>
          {event.pickType.map((type, index) => (
            <div key={index}>{type}</div>
          ))}
        </PickRoute>
      </MainEventBox>
      <BottomEventBox>
        {/* 여기에 메뉴, 가격, 참가 인원 등을 표시 */}
        <p>메뉴: {event.menu.join(", ")}</p>
        <p>원가: {event.originPrice}</p>
        <p>할인가: {event.salePrice}</p>
        <p>
          참가 인원: {event.minimumJoin}/{event.maximumJoin}
        </p>
      </BottomEventBox>
    </EventContainer>
  );
};

export default EventBox;
