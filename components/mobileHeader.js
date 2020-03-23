import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import Content from "./content";
import Button from "./button";
import mainMenuItems from "./headerData";

const HeaderContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 36px;
  width: auto;
  cursor: pointer;
`;

const HamBurgerLine = styled.div`
  width: 28px;
  height: 4px;
  border-radius: 2px;
  background-color: #fff;
  margin: 4px 0;
`;

const SideBar = styled.div`
  width: 200px;
  height: 100vh;
  position: fixed;
  right: 0;
  background-color: #fff;
  z-index: 100;
  padding: 16px;
`;

const MenuItem = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  margin: 16px;
  list-style: none;
  li {
    margin-bottom: 16px;
    a {
      text-decoration: none;
      color: #000;
      &:hover {
        color: #7b68ee;
      }
      font-family: Montserrat-Medium;
      font-size: 0.8rem;
    }
  }
`;

const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
`;

const MobileHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleShowSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      {showSidebar && (
        <SideBar>
          <Button
            bgColor={"transparent"}
            onClick={toggleShowSideBar}
            color={"#000"}
            padding={"0"}
            style={{ fontSize: 24 }}
          >
            &#10008;
          </Button>

          <MenuItem>
            {mainMenuItems.map((menuItem, index) => {
              return (
                <li key={menuItem.name}>
                  <Link href={menuItem.path} key={menuItem.name} passHref>
                    <StyledLink>{menuItem.name}</StyledLink>
                  </Link>
                </li>
              );
            })}
          </MenuItem>

          <Link href={"#"} passHref>
            <StyledLink style={{ marginLeft: 32, fontSize: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    marginRight: 16,
                    marginLeft: 16
                  }}
                  src={"https://source.unsplash.com/random/24x24"}
                />
                Lauren Williams
              </div>
            </StyledLink>
          </Link>
        </SideBar>
      )}
      <HeaderContainer>
        <Logo src={"/static/images/logo.png"} />
        <Button
          bgColor={"transparent"}
          padding={"0"}
          onClick={toggleShowSideBar}
        >
          <HamBurgerLine />
          <HamBurgerLine />
          <HamBurgerLine />
        </Button>
      </HeaderContainer>
    </div>
  );
};

export default MobileHeader;
