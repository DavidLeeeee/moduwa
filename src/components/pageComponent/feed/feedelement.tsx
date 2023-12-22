import styled from "styled-components";

const FeedElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; // 세로 중앙 정렬
    align-items: center;     // 가로 중앙 정렬
`;

const TopView = styled.div`
    display: flex;  
    width: 430px;
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

const FeedPicture = styled.div`
    width: 430px;
    height: 430px;
    background-color: skyblue;
`;

const BottomView = styled.div`
    width: 430px;
    height: 100px;
    background-color: pink;
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

function FeedElement () {
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

      <FeedPicture>
        {/* 사진 + 사진 여러개 넘기는 모듈? */}
      </FeedPicture>

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