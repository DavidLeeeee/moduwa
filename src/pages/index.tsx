import React from "react";
import PageContainer from "@/components/global/globalContainer";
import GlobalStyle from "@/components/global/globalMargin";
import EventBox from "@/components/pageComponent/home/eventBox";
import eventData from "../../public/data.json";

function HomePage() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        {eventData.map((event) => (
          <EventBox key={event.name} event={event} />
        ))}
        <h1>홈 페이지</h1>
        {/* 여기에 추가 컨텐츠 및 컴포넌트 */}
      </PageContainer>
    </>
  );
}

export default HomePage;
