// pages/_app.js
import React from "react";
import Navigation from "@/components/Navigation/navigation";
import Header from "@/components/Navigation/header";
import styled from "styled-components";
import { AppProps } from "next/app"; //타입 명시적 정의

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

// 메인 컨텐트 영역 스타일 (헤더와 페이지 컨텐트를 포함)
const MainContent = styled.div`
  display: flex;
  flex-direction: column; // 세로 방향으로 정렬
  flex: 1; // 남은 공간을 모두 차지
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navigation />
      <MainContent>
        <Header />
        <Component {...pageProps} />
      </MainContent>
    </Layout>
  );
}

export default MyApp;
