import styled from "styled-components";

const FeedElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 430px;  
  margin: 0 auto; // 가운데 정렬
`;

const TopView = styled.div`
  display: flex;  
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  background-color: green;
`;

const FeedProfile = styled.div`
  width: 40%;
  height: 100%;
  background-color: purple;
`;

const FeedDetail = styled.div`
  width: 40%;
  height: 100%;
  background-color: purple;
`;

const FeedPicture = styled.img`
  width: 100%;
  height: 360px;
  background-color: skyblue;
  object-fit: cover;
`;

const BottomView = styled.div`
  width: 100%;
  height: 100px;
  background-color: pink;
  margin-bottom: 50px;
`;

const LikeButton = styled.div`
  width: 200px;
  height: 20px;
  padding: 1rem;
  background-color: orange;
`;

const Content = styled.div`
  width: 100%;
  height: 80px;
  padding: 1rem;
  background-color: green;
`;

interface Feed {
  postedImage: string;
  storeName: string;
}
interface FeedProps {
  feed: Feed; // 여기서 Event는 위에서 정의한 인터페이스
}

const FeedElement: React.FC<FeedProps> = ({ feed }) => {
  return (
    <FeedElementContainer>
        <TopView>
          <FeedProfile>
              {/* 프로필 사진, 가게이름, 거리 */}
          </FeedProfile>

          <FeedDetail>
              {/* 팔로워, 구독 여부, 탭 */}
          </FeedDetail>
        </TopView>

        {/* 사진 + 사진 여러개 넘기는 모듈? */}
        <FeedPicture src={feed.postedImage} alt={feed.storeName}/>

        <BottomView>
          <LikeButton>
              {/* 좋아요 아이콘, 좋아요 개수 */}
          </LikeButton>

          <Content>
              {/* 날짜, 내용 */}
          </Content>
        </BottomView>
    </FeedElementContainer>
  );
}

export default FeedElement;