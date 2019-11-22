import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import RightCaret from "../../static/icons/RightCaret";
import Checkmark from "../../static/icons/Checkmark";

const Circle = styled.div`
  width: 17px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 20px;
  border: 1px solid transparent;
  background-color: ${props =>
    props.visited ? props.theme.jaBlue : "transparent"};
`;

const Dot = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${props => props.theme.subTitle};
  display: ${props => (props.visited ? "none" : "block")};
`;

const Title = styled.span`
  margin-right: 15px;
`;

const MenuItemContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${props =>
    props.visited ? props.theme.jaBlue : props.theme.subTitle};
  cursor: pointer;
  &:hover {
    ${Title} {
      text-decoration: underline;
    }
  }
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
  return (
    <MenuItemContainer
      selected={props.selected}
      visited={props.visited}
      onClick={e =>
        props.history.push(
          `/${props.match.params.business}/${props.match.params.position}/${props.index}`
        )
      }
    >
      <Circle visited={props.visited}>
        <Dot visited={props.visited} />
        {props.visited && <Checkmark />}
      </Circle>
      <Title visited={props.visited}>{titles[props.group]}</Title>
      {Number(props.match.params.pageId) === props.index && (
        <RightCaret color={props.visited ? "#00c2ea" : undefined} />
      )}
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);

// To see if the page has been visited
// To see if there are any errors on the visited page
