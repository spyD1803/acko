import React from "react";
import styled from "styled-components";
import Content from "./content";
import Button from "./button";
import Friends from "./friends";
import Ratings from "./ratings";

const Container = styled.div`
  padding: 16px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(221, 221, 221, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(221, 221, 221, 1);
  box-shadow: 0px 0px 5px 0px rgba(221, 221, 221, 1);
  border-radius: 2px;
  margin-bottom: 32px;
  display: grid;
  grid-template-rows: 1fr auto auto;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WorkoutComponent = ({ workout }) => {
  const { title, by, description, club, partners, members, reviews } = workout;
  return (
    <Container>
      <FlexContainer>
        <div style={{ width: 150 }}>
          <Image
            src={"https://source.unsplash.com/random/150x150"}
            style={{ transform: "translateY(-36px)", borderRadius: 2 }}
          />
        </div>
        <div>
          <Content
            semibold
            margin={"0 1rem 0"}
            mobileMargin={"0 1rem 1rem"}
            mobileSize={"0.9rem"}
          >
            {title}
          </Content>
          <Content
            semibold
            margin={"4px 1rem 1rem"}
            mobileMargin={"4px 1rem 1rem"}
            size={"0.6rem"}
            mobileSize={"0.6rem"}
            color={"#ccc"}
          >
            by {by}
          </Content>
          <Content
            medium
            size={"0.7rem"}
            style={{ textAlign: "justify" }}
            margin={"0 1rem"}
            mobileMargin={"0 1rem"}
            color={"#aaa"}
          >
            {description}
          </Content>
        </div>
      </FlexContainer>
      <FlexContainer style={{ margin: "1rem 0 1.5rem" }}>
        <div>
          <Content medium margin={"0"} size={"0.7rem"} mobileMargin={"0"}>
            Club: <span className={"lightText"}> {club}</span>
          </Content>
          <Content medium margin={"0"} size={"0.7rem"} mobileMargin={"0"}>
            Partners: <span className={"lightText"}> {partners}</span>
          </Content>
          <Content medium margin={"0"} size={"0.7rem"} mobileMargin={"0"}>
            Members: <span className={"lightText"}> {members}</span>
          </Content>
        </div>
        <div>
          <Ratings rating={3} />
          <Content
            regular
            margin={"0"}
            size={"0.7rem"}
            mobileMargin={"0"}
            style={{ textAlign: "right" }}
          >
            ({reviews} reviews)
          </Content>
        </div>
      </FlexContainer>
      <FlexContainer>
        <Friends friendsList={[1, 2, 3, 4, 5]} />
        <Button bgColor={"#7B68EE"}>SCHEDULE</Button>
      </FlexContainer>

      <style jsx>{`
        .lightText {
          color: #aaa;
        }
      `}</style>
    </Container>
  );
};

export default WorkoutComponent;
