import React from "react";
import styled from "styled-components";

const ContentContainer = styled.p`
  font-family: ${props =>
    props.regular
      ? "Montserrat-Regular, sans-serif"
      : props.medium
      ? "Montserrat-Medium, sans-serif"
      : props.semibold
      ? "Montserrat-SemiBold, sans-serif"
      : "Montserrat-Bold, sans-serif"};
  color: ${props => (props.color ? props.color : "#000")};
  font-size: ${props => (props.size ? props.size : "1rem")};
  margin: ${props => (props.margin ? props.margin : "1rem")};

  @media (max-width: 767px) {
    font-size: ${props => (props.mobileSize ? props.mobileSize : "0.7rem")};
    margin: ${props => (props.mobileMargin ? props.mobileMargin : "1rem")};
  }
`;

const Content = props => {
  return (
    <ContentContainer {...props}>
      {props.mobileContent ? (
        <div dangerouslySetInnerHTML={{ __html: props.mobileContent }}></div>
      ) : (
        props.children
      )}
    </ContentContainer>
  );
};

export default Content;
