import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderStyles = {
  width: '100%',
  background: 'gray',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // paddingLeft: '20px',
  fontWeight: '700',
  fontSize: '30pt',
  color: 'skyblue',
};

const FooterStyles = {
  width: '100%',
  height: '50px',
  display: 'flex',
  background: 'gray',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
};

const StDiaryListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  width: 1000px;
  margin: 50px auto;
`;

// const layoutStyles = {
//   display: 'flex',
// 	flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   minHeight: '90vh',
// }

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
        <Link to={`/`}>
          <span>날씨 일기</span>
        </Link>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ ...FooterStyles }}>
      <span>copyright @jeein</span>
    </div>
  );
}

function Layout({ children }) {
  return (
    <>
      <Header />
      <StDiaryListContainer>
        {children}
      </StDiaryListContainer>
      <Footer />
    </>
  );
}

export default Layout;