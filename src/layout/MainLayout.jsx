import React from "react";
import styled from "styled-components";
import Header from "../components/ui/Header";

const LayoutContainer = styled.div`
  background-image: url("https://wallpaper.forfun.com/fetch/3b/3bbc712f759f909d4042f67b732e2fc8.jpeg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  padding: 20px;
`;

const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

export default MainLayout;
