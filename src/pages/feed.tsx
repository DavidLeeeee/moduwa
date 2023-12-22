import PageContainer from "@/components/global/globalContainer";
import GlobalStyle from "@/components/global/globalMargin";

import FeedElement from "../components/pageComponent/feed/feedelement";
import FeedTop from "../components/pageComponent/feed/feedtop";

import feedData from "../../public/feeddata.json";

// 데이터 가져옴 -> map으로 FeedElement에 props.

function FeedPage() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <FeedTop />

        {feedData.map((feed) => (
          <FeedElement key={feed.id} feed={feed} />
        ))}
      </PageContainer>
    </>
  );
}

export default FeedPage;
