import PageContainer from "@/components/global/globalContainer";
import GlobalStyle from "@/components/global/globalMargin";

import FeedElement from "../components/pageComponent/home/feed/feedelement";
import FeedTop from "../components/pageComponent/home/feed/feedtop";

// 데이터 가져옴 -> map으로 FeedElement에 props.

function FeedPage() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <FeedTop />

        <FeedElement />
      </PageContainer>
    </>
  );
}

export default FeedPage;
