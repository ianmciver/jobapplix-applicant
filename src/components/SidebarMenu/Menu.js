import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { media } from "../../constants/mediaQueries";
import MenuItem from "./MenuItem";

const MenuContainer = styled.div`
  position: fixed;
  top: 60px;
  height: calc(100% - 59px);
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  transform-origin: top right;
  transform: ${props => (props.menuOpen ? `scale(1,1)` : `scale(0,1)`)};
  transition: transform 200ms linear;
  background-color: ${props => props.theme.white};
  z-index: 10;
  ${media.desktop`
    width: 250px;
    border: 1px solid ${props => props.theme.positionsBorder};
    border-radius: 5px;
    align-self: flex-start;
    position: relative;
    display: ${props => (props.visible ? "flex" : "none")};
    top: 120px;
    right: 20px;
    width: 250px;
    height: initial;
  `};
`;

const MenuHeader = styled.div`
  background-color: ${props => props.theme.title};
  padding: 20px 30px;
  span {
    font-size: 1.8rem;
    color: ${props => props.theme.white};
  }

  ${media.desktop`
    border-radius: 5px 5px 0 0;
  `}
`;

const MenuFooter = styled.div`
  background-color: ${props => props.theme.title};
  padding: 5px 0;
  ${media.desktop`
    border-radius: 0 0 5px 5px;
  `};
`;

const MenuBody = styled.div`
  position: relative;
  flex-grow: 1;
  overflow: scroll;
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;

const Menu = props => {
  return (
    <MenuContainer visible={props.visible} menuOpen={props.open}>
      <MenuHeader>
        <span>Application Steps:</span>
      </MenuHeader>
      <MenuBody>
        <MenuItems>
          {props.availableGroups.map((item, index) => {
            let selected = Number(props.match.params.pageId) !== index;
            return (
              <MenuItem
                group={item}
                key={item}
                index={index}
                visited={props.visitedGroups[item] && selected}
              />
            );
          })}
        </MenuItems>
      </MenuBody>
      <MenuFooter />
    </MenuContainer>
  );
};

export default connect(state => ({
  availableGroups: state.position.availableGroups,
  visitedGroups: state.position.visitedGroups
}))(withRouter(Menu));
