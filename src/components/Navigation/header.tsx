import React, { ReactNode } from "react";
import styled from "styled-components";

// Styled-components를 사용한 스타일링
const HeaderContainer = styled.header`
  height: 48px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #dbdbdb;
`;

interface HeaderProps {
  children?: ReactNode; // children prop을 옵셔널로 정의
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
