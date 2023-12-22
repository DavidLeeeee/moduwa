import Link from "next/link";
import React from "react";
import styled from "styled-components";
//임의의 아이콘 임포트, 나중에 아이콘 작업해서 넣기
import { FaHome, FaNewspaper, FaComments, FaUser } from "react-icons/fa";

//네비게이션 바(드로워/바텀탭)의 스타일을 지정한다.
const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  // 웹용 Drawer 스타일
  @media (min-width: 1150px) {
    border-right: 1px solid #dbdbdb;
    padding-top: 100px;
    justify-content: flex-start;
    left: 0;
    top: 0;
    height: 100vh;
    width: 200px;
  }
  @media (min-width: 769px) and (max-width: 1149px) {
    border-right: 1px solid #dbdbdb;
    padding-top: 100px;
    justify-content: flex-start;
    left: 0;
    top: 0;
    height: 100vh;
    width: 80px;
  }
  // 모바일용 Bottom-Tab 스타일
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 65px;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: row;

    border-top: 1px solid #dbdbdb;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.12);
  }
`;

//네비게이션의 각각의 버튼 스타일을 정의한다
const NavLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(30, 30, 30); //아이콘색
  text-decoration: none;
  font-size: 14px;
  // 웹용 스타일
  @media (min-width: 1150px) {
    width: 195px;
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px 30px;
    &:hover {
      background-color: #afafaf;
    }
    .nav-text {
      padding-left: 20px;
    }
  }
  @media (min-width: 768px) and (max-width: 1149px) {
    align-items: center;
    justify-content: center;
    width: 78px;
    padding: 20px 0;
    &:hover {
      background-color: #afafaf;
    }
    .nav-text {
      display: none; // 이 부분을 추가하여 텍스트 숨김
    }
  }
  // 모바일용 스타일
  @media (max-width: 768px) {
    display: flex;
    padding: 4px 20px;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    &:hover {
      background-color: #f0f0f0;
    }
    .nav-text {
    }
  }
  svg {
    margin-bottom: 5px;
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Navigation() {
  return (
    <NavigationContainer>
      <Link href="/" passHref>
        <NavLink>
          <Icon>
            <FaHome size={28} />
          </Icon>
          <span className="nav-text">홈</span>
        </NavLink>
      </Link>
      <Link href="/feed" passHref>
        <NavLink>
          <Icon>
            <FaNewspaper size={28} />
          </Icon>
          <span className="nav-text">모두소식</span>
        </NavLink>
      </Link>
      <Link href="/chat" passHref>
        <NavLink>
          <Icon>
            <FaComments size={28} />
          </Icon>
          <span className="nav-text">모두톡</span>
        </NavLink>
      </Link>
      <Link href="/profile" passHref>
        <NavLink>
          <Icon>
            <FaUser size={28} />
          </Icon>
          <span className="nav-text">프로필</span>
        </NavLink>
      </Link>
      {/* 추가적인 네비게이션 링크는 여기에 */}
    </NavigationContainer>
  );
}

export default Navigation;
