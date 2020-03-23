import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  padding: ${props => (props.padding ? props.padding : "12px 48px")};
  border-radius: 8px;
  color: ${props => (props.color ? props.color : "#fff")};
  background-color: ${props => (props.bgColor ? props.bgColor : "#fff")};
  border: none;
`;

const Button = props => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};

export default Button;
