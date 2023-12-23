import styled from "styled-components";

const FeedTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 430px;  
    margin: 0 auto; // 가운데 정렬
`;

const FeedTopbar = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-between; // 세로 중앙 정렬
    align-items: center;     // 가로 중앙 정렬
    background-color: pink;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    background-color: lightblue;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
`;

const SubscribeButton = styled(Button)`
    // 구독 버튼에 특화된 스타일 (필요에 따라 추가)
`;

const SellerButton = styled(Button)`
    // 모두의판매자 버튼에 특화된 스타일 (필요에 따라 추가)
`;

function FeedTop() {
  return (
    <FeedTopContainer>
        <FeedTopbar>
            <SubscribeButton>구독</SubscribeButton>
            <SellerButton>모두의판매자</SellerButton>
        </FeedTopbar>
    </FeedTopContainer>
  );
}

export default FeedTop;