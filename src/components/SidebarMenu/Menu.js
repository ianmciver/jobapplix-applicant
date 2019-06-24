import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import { media } from "../../constants/mediaQueries";
import MenuItem from "./MenuItem";
import { PositionContext } from "../../context/PositionContext";
import { positionsBorder } from "../../constants/colors";

const MenuContainer = styled.div`
  border-right: 1px solid ${positionsBorder};
  display: none;
  ${media.desktop`
    ${props => {
      return props.visible
        ? css`
            display: block;
          `
        : css`
            display: none;
          `;
    }};
  `};
`;

const Menu = props => {
  const positionContext = useContext(PositionContext);
  return (
    <MenuContainer visible={props.visible}>
      {positionContext.availableGroups.map((item, index) => {
        return (
          <MenuItem
            group={item}
            key={item}
            index={index}
            selected={Number(props.match.params.pageId) === index}
          />
        );
      })}
    </MenuContainer>
  );
};

export default withRouter(Menu);
