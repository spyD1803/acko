import React, { useState } from "react";
import styled from "styled-components";
import Content from "./content";
import WorkoutComponent from "./workoutComponent";

const ChooserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 140px;
  transform: translateY(-50%);
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 16px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${props =>
    props.selected == props.index ? "scale(1.2)" : "scale(1)"};
  background-color: #fff;
  border-bottom: ${props =>
    props.selected == props.index ? "2px solid #7b68ee" : "none"};
  border-collapse: collapse;
  border-right: 1px solid #ddd;
  border-radius: ${props => (props.selected == props.index ? "0px" : "16px")};
`;

const Image = styled.img`
  width: auto;
  height: 64px;

  @media (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-bottom: 100px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ChooserItems = [
  {
    name: "Yoga",
    image: "yoga"
  },
  {
    name: "Fitness",
    image: "fitness"
  },
  {
    name: "Dance",
    image: "dance"
  },
  {
    name: "Pilates",
    image: "pilates"
  }
];

const WorkoutOptions = [
  {
    title: "Perfect Body System",
    by: "Jasmine Taylor",
    description:
      "Let's just call this the accelerated beginner's guide to bodybuilding. In this plan your first month of training will be deanding, but not so demanding as to cause injury (or worse yet, burnout) and progressive in",
    club: "Health Forge",
    partners: "Multisport",
    members: "10/14",
    reviews: "66"
  },
  {
    title: "Power Pump",
    by: "Greg Austin",
    description:
      "This program isn't just from the true beginner who has never touched a weight before. it's also suitable for anyone who has taken an extended leave of absence from training.",
    club: "Iron Addicts Gym",
    partners: "BeActive",
    members: "7/10",
    reviews: "21"
  },
  {
    title: "Body & Soul",
    by: "John Taylor",
    description:
      "Whether you're  novice taking the first steps towards fitness or an exercise fanatic hoping to optimise your results, a well-rounded fitness training program is essential. Include these five elements to create.",
    club: "Gold Gym Ohio",
    partners: "BeActive, Multisport",
    members: "7/14",
    reviews: "12"
  },
  {
    title: "Rapid Fat Burning",
    by: "Alicia Reed",
    description:
      "If you like hititng the weights to build size in the winter and slimming down for summer, it's time to switch that program up",
    club: "Fit Life",
    partners: "Multisport",
    members: "8/14",
    reviews: "134"
  },
  {
    title: "Perfect Body System",
    by: "Jasmine Taylor",
    description:
      "Let's just call this the accelerated beginner's guide to bodybuilding. In this plan your first month of training will be deanding, but not so demanding as to cause injury (or worse yet, burnout) and progressive in",
    club: "Health Forge",
    partners: "Multisport",
    members: "10/14",
    reviews: "66"
  },
  {
    title: "Power Pump",
    by: "Greg Austin",
    description:
      "This program isn't just from the true beginner who has never touched a weight before. it's also suitable for anyone who has taken an extended leave of absence from training.",
    club: "Iron Addicts Gym",
    partners: "BeActive",
    members: "7/10",
    reviews: "21"
  }
];

const Details = () => {
  const [selected, setSelected] = useState(1);

  const onChooseClick = index => setSelected(index);

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <div className="wrapper">
        <ChooserContainer>
          {ChooserItems.map(({ name, image }, index) => (
            <ItemContainer
              key={name}
              selected={selected}
              index={index}
              onClick={() => onChooseClick(index)}
            >
              <Image src={`/static/images/${image}.jpeg`} />
              <Content mobileSize={"0.8rem"} mobileMargin={"0"}>
                {name}
              </Content>
            </ItemContainer>
          ))}
        </ChooserContainer>

        <Content
          medium
          size={"0.8rem"}
          margin={"0 0 2rem"}
          mobileMargin={"0 0 2rem"}
          style={{ textAlign: "right" }}
        >
          Sort by: <span id={"sortFilter"}>Closest Distance &#9662; </span>
        </Content>
        <GridContainer>
          {WorkoutOptions.map((workout, index) => (
            <WorkoutComponent
              key={`${workout.name}${index}`}
              workout={workout}
            />
          ))}
          {/* <WorkoutComponent />
          <WorkoutComponent />
          <WorkoutComponent />
          <WorkoutComponent />
          <WorkoutComponent /> */}
        </GridContainer>
      </div>
      <style jsx>{`
        #sortFilter {
          color: #7b68ee;
        }
      `}</style>
    </div>
  );
};

export default Details;
