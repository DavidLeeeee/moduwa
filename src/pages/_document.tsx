// pages/_document.tsx
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  //서버사이드 렌더링 시에 초기 스타일을 수집하고 반환
  static async getInitialProps(ctx: DocumentContext) {
    //인스턴스 생성 [서버 스타일시트]
    const sheet = new ServerStyleSheet();
    //컴텍스트의 RenderPage메서드를 저장
    const originalRenderPage = ctx.renderPage;

    try {
      //오버라이드하여 스타일을 수집
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      //초기 스타일과 sheet.getStyleElement()스타일을 병합
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      // 전체 HTML 문서를 감싸는 루트 요소입니다
      <Html>
        {/*  이 부분에 메타데이터, 스타일 시트, 스크립트 등을 추가할 수 있습니다. 여기에서는 빈 상태로 두었습니다. */}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
