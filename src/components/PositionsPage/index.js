import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { fetch } from "whatwg-fetch";
import Helmet from "react-helmet";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { media } from "../../constants/mediaQueries";

import App from "../App";
import Menu from "../SidebarMenu/Menu";
import Footer from "../Footer";
import Header from "./Header";
import Description from "./Description";
import QuestionsGroup from "./QuestionsGroup";
import Questions from "./Questions";
import WorkHistoryGroup from "./WorkHistoryGroup";
import EduHistoryGroup from "./EduHistoryGroup";
import PersonalRefsGroup from "./PersonalRefsGroup";
import ShiftTimes from "./Availability/ShiftTimes";
import Finish from "./Finish";
import Complete from "./Complete";

import ListMenu from "../../static/icons/ListMenu";
import Close from "../../static/icons/Close";

import { API_URL } from "../../constants/urls";
import { checkStatus } from "../../helpers";
import { loadBusiness } from "../../reduxSlices/BusinessSlice";
import { loadPosition } from "../../reduxSlices/PositionSlice";

const MobileOnly = styled.div`
  ${media.desktop`
    display: none;
  `};
`;

const OpenCloseButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 11;
  background-color: ${props => props.theme.white};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin-top: 100px;
  position: fixed;
  right: 20px;
  top: -30px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  ${media.desktop`
    position: relative;
    visibility: hidden;
  `};
`;

const ApplicationContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.white};
`;

const PositionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const QuestionsContainer = styled.div`
  width: 100%;
  max-width: 760px;
`;

const SideContainerLeft = styled.div`
  flex: 1 0;
  display: none;
  ${media.desktop`
    display: flex;
    justify-content: flex-end;
  `};
`;

const SideContainerRight = styled.div`
  flex: 1 1;
  display: none;
  ${media.desktop`
    display: flex;
    justify-content: flex-end;
  `};
`;

const PositionPage = props => {
  const {
    match,
    loadBusiness,
    loadPosition,
    history,
    business,
    position
  } = props;

  const [menuOpen, setMenuOpen] = useState(false);

  const isQuestionsGroup = currentGroup => {
    return (
      currentGroup !== "workHistory" &&
      currentGroup !== "personalRefs" &&
      currentGroup !== "eduHistory" &&
      currentGroup !== "availability" &&
      currentGroup !== "finish" &&
      currentGroup !== "complete"
    );
  };

  const getBusiness = useCallback(async () => {
    try {
      const businessRes = await fetch(
        `${API_URL}/businesses?url=${match.params.business}`
      );
      await checkStatus(businessRes);
      const businessData = await businessRes.json();
      loadBusiness({
        business: businessData.business,
        positions: businessData.positions
      });
    } catch (err) {
      history.replace("/404");
    }
  }, [match, loadBusiness, history]);

  const getPosition = useCallback(async () => {
    try {
      const positionRes = await fetch(
        `${API_URL}/businesses/position?id=${match.params.position}&businessUrl=${match.params.business}`
      );

      await checkStatus(positionRes);
      const positionData = await positionRes.json();
      loadPosition(positionData);
    } catch (err) {
      history.replace(`/${match.params.business}`);
    }
  }, [match, loadPosition, history]);

  useEffect(() => {
    if (!business.loaded) {
      getBusiness();
    }

    if (!(position.details.id === props.match.params.position)) {
      getPosition();
    }
  }, []);

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [props.match.params.pageId]);

  // Get the ID of the page if there is one.
  const pageId = props.match.params.pageId && Number(props.match.params.pageId);

  // Once the questions have loaded, get the name of the question group using the pageId
  const group =
    pageId !== undefined && position.availableGroups.length > 0
      ? position.availableGroups[pageId]
      : "";

  // Once the questions have loaded, get the list of questions using the pageId and group name.
  const questions = (pageId !== undefined &&
    isQuestionsGroup(group) &&
    position.questions &&
    position.questions.find(obj => obj.groupName === group)) || {
    questions: []
  };

  const nextPage = `/${props.match.params.business}/${
    props.match.params.position
  }/${pageId === undefined ? 0 : pageId + 1}`;

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
    custom: "Position Specific"
  };

  const menuVisible = () => {
    return props.match.params.pageId !== undefined && group !== "complete";
  };

  return (
    <App>
      <Helmet>
        <title>{business.name}</title>
      </Helmet>
      <Header
        business={business}
        positionName={position.details.name}
        businessUrl={props.match.params.business}
      />
      <ApplicationContainer>
        <Route
          path="/:business/:position"
          exact
          render={props => (
            <Description
              description={position.details.description}
              nextPage={nextPage}
            />
          )}
        />
        <Route
          path="/:business/:position/:pageId"
          render={props => (
            <PositionContainer>
              <SideContainerLeft>
                <OpenCloseButton />
                <Menu visible={menuVisible()} open={true} />
              </SideContainerLeft>
              <QuestionsContainer>
                <MobileOnly>
                  <OpenCloseButton
                    visible={menuVisible()}
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {menuOpen ? <Close /> : <ListMenu />}
                  </OpenCloseButton>
                  <Menu visible={menuVisible()} open={menuOpen} mobile />
                </MobileOnly>
                {isQuestionsGroup(group) && (
                  <QuestionsGroup
                    title={titles[group]}
                    nextPage={nextPage}
                    notice="* indicates required field"
                    group={group}
                    {...props}
                  >
                    <Questions
                      group={group}
                      questions={questions.questions}
                      answersGroup={position[group]}
                      {...props}
                    />
                  </QuestionsGroup>
                )}
                {group === "workHistory" && (
                  <QuestionsGroup
                    title={titles[group]}
                    group={group}
                    nextPage={nextPage}
                    notice="Please provide information for the last two years of your employment"
                    {...props}
                  >
                    <WorkHistoryGroup />
                  </QuestionsGroup>
                )}
                {group === "personalRefs" && (
                  <QuestionsGroup
                    title={titles[group]}
                    group={group}
                    nextPage={nextPage}
                    notice="Please provide three personal references"
                    {...props}
                  >
                    <PersonalRefsGroup />
                  </QuestionsGroup>
                )}
                {group === "eduHistory" && (
                  <QuestionsGroup
                    title={titles[group]}
                    group={group}
                    nextPage={nextPage}
                    notice="Please provide your educational history, starting with high school"
                    {...props}
                  >
                    <EduHistoryGroup />
                  </QuestionsGroup>
                )}
                {group === "availability" && (
                  <QuestionsGroup
                    title={titles[group]}
                    group={group}
                    nextPage={nextPage}
                    notice="What days and times are you available? Please select all that apply:"
                    {...props}
                  >
                    <ShiftTimes />
                  </QuestionsGroup>
                )}
                {group === "finish" && (
                  <Finish nextPage={nextPage} group={group} {...props} />
                )}
                {group === "complete" && <Complete />}
              </QuestionsContainer>
              <SideContainerRight />
            </PositionContainer>
          )}
        />
      </ApplicationContainer>
      <Footer />
    </App>
  );
};

export default connect(
  state => ({ business: state.business, position: state.position }),
  {
    loadBusiness,
    loadPosition
  }
)(PositionPage);
