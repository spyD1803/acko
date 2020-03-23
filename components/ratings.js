import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RatingsComponent = styled.label`
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 1rem;
  color: #ababab;
  transition: color 0.2s ease-out;

  &:hover {
    cursor: pointer;
  }

  &.is-selected {
    color: #ffd700;
  }
`;

const Ratings = ({ rating: propRating }) => {
  const [tempRating, setTempRating] = useState(null);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    setRating(propRating - 1);
  }, [setRating]);

  const onRatingClicked = rating => {
    setRating(rating);
    setTempRating(rating);
  };

  const onStarHover = index => {
    setTempRating(rating);
    setRating(index);
  };

  const onStarHoverOut = index => {
    setRating(tempRating);
    setTempRating(null);
  };
  return (
    <div>
      {[...Array(5).keys()].map((item, index) => {
        let newClass = "";
        if (rating >= index && rating != null) {
          newClass = "is-selected";
        }
        return (
          <RatingsComponent
            key={index}
            className={newClass}
            onClick={() => {
              onRatingClicked(index);
            }}
            onMouseOver={() => {
              onStarHover(index);
            }}
            onMouseOut={() => {
              onStarHoverOut(index);
            }}
          >
            ★
          </RatingsComponent>
        );
      })}
    </div>
  );
};

export default Ratings;
