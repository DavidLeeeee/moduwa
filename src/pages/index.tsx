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
      </PageContainer>
    </>
  );
}

export default HomePage;
