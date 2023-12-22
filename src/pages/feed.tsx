import PageContainer from "@/components/global/globalContainer";
import GlobalStyle from "@/components/global/globalMargin";
import FeedElement from "./feedelement";
import FeedTop from "./feedtop";

// 데이터 가져옴 -> map으로 FeedElement에 props.

function FeedPage() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <FeedTop />

        <FeedElement d={"d"}/>
      </PageContainer>
    </>
  );
}

export default FeedPage;
