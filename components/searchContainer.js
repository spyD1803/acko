import React from "react";
import styled from "styled-components";
import Header from "./header";
import Content from "./content";
import Button from "./button";

const Container = styled.div`
  background-image: url("/static/images/banner.jpg");
  height: 350px;
  background-position: center;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.7);
`;

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchButtonContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  transform: translateY(-50%);
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SearchInput = styled.input`
  padding: 8px 16px;
  width: 440px;
  border-radius: 8px;
  border: 0px solid #000;
  margin: 0 16px;

  @media (max-width: 767px) {
    width: 250px;
    margin: 16px;
  }
`;

const SearchContainer = () => {
  return (
    <Container>
      <Wrapper>
        <ContentContainer>
          <Content
            size={"2rem"}
            color={"#fff"}
            style={{ transform: "translateY(-50%)" }}
          >
            Let us find your perfect<span id={"fitnessText"}> fitness </span>
            classes!
          </Content>
          <SearchButtonContainer>
            <SearchInput placeholder="Enter your location" />
            <Button bgColor={"#7B68EE"}>SEARCH</Button>
          </SearchButtonContainer>
        </ContentContainer>
      </Wrapper>
      <style jsx>{`
        #fitnessText {
          color: green;
          font-style: italic;
          font-family: Montserrat-Regular;
        }
      `}</style>
    </Container>
  );
};

export default SearchContainer;
