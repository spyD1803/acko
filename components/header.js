import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { withRouter } from "next/router";

import mainMenuItems from "./headerData";

const PageWrapper = styled.div`
  z-index: 1;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  /* transition: all 0.3s ease 0.15s; */
`;

const Wrapper = styled.div`
  max-width: 1024px;
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${props => props.backgroundColor};
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 36px;
  width: auto;
  cursor: pointer;
`;

const MenuItem = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin: 0px 16px;
  align-items: center;
  list-style: none;
  li {
    margin-left: 48px;
    &.menu-active::after {
      content: "";
      display: block;
      width: 32px;
      padding-top: 4px;
      border-bottom: 2px solid #7b68ee;
    }
    a {
      text-decoration: none;
      color: #fff;
      &:hover {
        color: #7b68ee;
      }
      font-family: Montserrat-Medium;
      font-size: 0.8rem;
    }
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`;

class Header extends React.Component {
  render() {
    // console.log(context);
    return (
      <PageWrapper {...this.props} backgroundColor="transparent">
        <Wrapper {...this.props} backgroundColor="transparent">
          <Link href={"/"} passHref>
            <Logo src={`/static/images/logo.jpeg`} />
          </Link>

          <MenuItem {...this.props}>
            {mainMenuItems.map((menuItem, index) => {
              return (
                <li
                  key={menuItem.name}
                  className={menuItem.selected ? "menu-active" : undefined}
                >
                  <Link href={menuItem.path} key={menuItem.name} passHref>
                    <StyledLink>{menuItem.name}</StyledLink>
                  </Link>
                </li>
              );
            })}
          </MenuItem>
          <div style={{ display: "flex" }}>
            <Link href={"#"} passHref>
              <StyledLink>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    fontSize: 8,
                    borderRadius: 4,
                    backgroundColor: "#7B68EE",
                    position: "relative",
                    top: 8,
                    left: 16
                  }}
                ></div>
                <img
                  src={"/static/images/notif.png"}
                  style={{
                    width: 18,
                    height: "auto"
                  }}
                />
              </StyledLink>
            </Link>

            <Link href={"#"} passHref>
              <StyledLink style={{ marginLeft: 32, fontSize: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 14,
                      marginRight: 16
                    }}
                    src={"https://source.unsplash.com/random/24x24"}
                  />
                  {/* <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 14,
                      backgroundColor: "#7B68EE",
                      marginRight: 16
                    }}
                  ></div> */}
                  Lauren Williams
                </div>
              </StyledLink>
            </Link>
          </div>
        </Wrapper>
      </PageWrapper>
    );
  }
}

Header.defaultProps = {
  isFixed: true,
  backgroundColor: "white",
  showHeader: false,
  logo: "logo"
};

export default withRouter(Header);
