import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { media } from "../../constants/mediaQueries";

import RightCaret from "../../static/icons/RightCaret";
import Checkmark from "../../static/icons/Checkmark";

const Circle = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 20px;
  border: 1px solid transparent;
  background-color: ${props =>
    props.visited ? props.theme.jaBlue : "transparent"};

  ${media.desktop`
    width: 17px;
    height: 17px;
  `}
`;

const Dot = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${props =>
    props.selected ? props.theme.white : props.theme.subTitle};
  display: ${props => (props.visited ? "none" : "block")};
`;

const Title = styled.span`
  /* margin-right: 15px; */
`;

const MenuItemContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.2rem;
  background: ${props => (props.selected ? props.theme.jaBlue : "transparent")};
  color: ${props =>
    props.selected
      ? props.theme.white
      : props.visited
      ? props.theme.jaBlue
      : props.theme.subTitle};
  cursor: pointer;

  &:hover {
    ${media.desktop`
      ${Title} {
        text-decoration: underline;
      }    
    `}
  }

  ${media.desktop`
    font-size: 1.5rem;`}
`;

const CircleTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const titles = {
  basic: "Basic Information",
  position: "Position & Availability",
  history: "Employment History",
  general: "General Information",
  skills: "Relevant Skills",
  other: "Other Information",
  workHistory: "Work History",
  personalRefs: "Personal References",
  eduHistory: "Educational History",
  availability: "Availability",
  finish: "Save & Submit",
  custom: "Position Specific",
  complete: "Complete"
};

const MenuItem = props => {
  const selected = Number(props.match.params.pageId) === props.index;
  return (
    <MenuItemContainer
      selected={selected}
      visited={props.visited}
      onClick={e =>
        props.history.push(
          `/${props.match.params.business}/${props.match.params.position}/${props.index}`
        )
      }
    >
      <CircleTitleContainer>
        <Circle visited={props.visited}>
          <Dot visited={props.visited} selected={selected} />
          {props.visited && <Checkmark />}
        </Circle>
        <Title visited={props.visited}>{titles[props.group]}</Title>
      </CircleTitleContainer>
      {selected && <RightCaret />}
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);

// To see if the page has been visited
// To see if there are any errors on the visited page
