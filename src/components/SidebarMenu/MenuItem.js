import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { positionsBorder, jaBlue, white, dark } from "../../constants/colors";

const MenuItemContainer = styled.div`
  padding: 20px 30px 20px 20px;
  font-size: 1.2rem;
  width: 100%;
  position: relative;
  cursor: pointer;
  color: ${dark};
  text-decoration: none;
  ${props =>
    props.selected &&
    css`
      background-color: ${jaBlue};
      color: ${white};
      box-shadow: 0 1px 3px ${positionsBorder};
    `}
`;

const Pointer = styled.div`
  position: absolute;
  top: 0;
  left: 200.4px;
  border-left: 26px solid ${jaBlue};
  border-top: 26px solid transparent;
  border-bottom: 26px solid transparent;
`;

const titles = {
  basic: "BASIC INFORMATION",
  position: "POSITION & AVAILABILITY",
  history: "EMPLOYMENT HISTORY",
  general: "GENERAL INFORMATION",
  skills: "RELEVANT SKILLS",
  other: "OTHER INFORMATION",
  workHistory: "WORK HISTORY",
  personalRefs: "PERSONAL REFERENCES",
  eduHistory: "EDUCATIONAL HISTORY",
  availability: "AVAILABILITY",
  finish: "SAVE & SUBMIT",
  custom: "POSITION SPECIFIC"
};

const MenuItem = props => {
  return (
    <Link
      to={`/${props.match.params.business}/${props.match.params.position}/${props.index}`}
      style={{ textDecoration: "none" }}
    >
      <MenuItemContainer selected={props.selected}>
        {titles[props.group]}
        {props.selected && <Pointer />}
      </MenuItemContainer>
    </Link>
  );
};

export default withRouter(MenuItem);
