import React from "react";
import styled from "styled-components";

const FriendsContainer = styled.div`
  display: flex;
`;

const Friend = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #f8f8f8;
  margin: -4px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Friends = props => {
  const { friendsList } = props;
  return (
    <FriendsContainer>
      {friendsList ? (
        friendsList.length <= 3 ? (
          friendsList.map((friend, index) => (
            <Friend key={index}>
              <img src={"https://source.unsplash.com/random/48x48"} />
            </Friend>
          ))
        ) : (
          <div style={{ display: "flex" }}>
            {friendsList.slice(0, 3).map((friend, index) => (
              <div key={index}>
                <Friend>
                  <img src={"https://source.unsplash.com/random/48x48"} />
                </Friend>
              </div>
            ))}
            <Friend>+ {friendsList.length - 4}</Friend>
          </div>
        )
      ) : null}
    </FriendsContainer>
  );
};

export default Friends;
