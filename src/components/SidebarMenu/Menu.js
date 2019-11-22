import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import { media } from "../../constants/mediaQueries";
import MenuItem from "./MenuItem";
import { PositionContext } from "../../context/PositionContext";

const MenuContainer = styled.div`
  position: relative;
  top: 120px;
  right: 20px;
  width: 250px;
  display: none;
  flex-direction: column;
  border: 1px solid ${props => props.theme.positionsBorder};
  border-radius: 5px;
  align-self: flex-start;
  transform-origin: left top;
  transform: ${props => (props.menuOpen ? `scale(1,1)` : `scale(0,0)`)};
  transition: transform 200ms linear;
  background-color: ${props => props.theme.white};
  ${media.desktop`
    ${props => {
      return props.visible
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `;
    }};
  `};
`;

const MenuHeader = styled.div`
  background-color: ${props => props.theme.title};
  padding: 20px 30px;
  border-radius: 5px 5px 0 0;
  span {
    font-size: 1.6rem;
    color: ${props => props.theme.white};
  }
`;

const MenuFooter = styled.div`
  background-color: ${props => props.theme.title};
  padding: 10px 0;
  border-radius: 0 0 5px 5px;
`;

const MenuBody = styled.div`
  position: relative;
`;

const MenuLine = styled.div`
  height: 100%;
  position: absolute;
  left: 30px;
  border-left: 2px solid ${props => props.theme.jaBlue};
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22.5px;
  position: relative;
  z-index: 2;
`;

const Menu = props => {
  const positionContext = useContext(PositionContext);
  return (
    <MenuContainer visible={props.visible} menuOpen={props.open}>
      <MenuHeader>
        <span>Application Steps:</span>
      </MenuHeader>
      <MenuBody>
        <MenuLine />
        <MenuItems>
          {positionContext.availableGroups.map((item, index) => {
            return (
              <MenuItem
                group={item}
                key={item}
                index={index}
                visited={
                  positionContext.visitedGroups[item] &&
                  Number(props.match.params.pageId) !== index
                }
              />
            );
          })}
        </MenuItems>
      </MenuBody>
      <MenuFooter />
    </MenuContainer>
  );
};

export default withRouter(Menu);
