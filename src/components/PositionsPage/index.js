import React, { useContext, useEffect } from "react";
import { fetch } from "whatwg-fetch";
import Helmet from "react-helmet";
import { Route } from "react-router-dom";
// import ErrorPage from "next/error";
import styled from "styled-components";

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

import { API_URL } from "../../constants/urls";
import { checkStatus } from "../../helpers";
import { PositionContext } from "../../context/PositionContext";
import { BusinessContext } from "../../context/BusinessContext";

const ApplicationContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
`;

const PositionPage = props => {
  const businessContext = useContext(BusinessContext);
  const positionContext = useContext(PositionContext);
  const { business } = businessContext;

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

  const getBusiness = async () => {
    try {
      const businessRes = await fetch(
        `${API_URL}/businesses?url=${props.match.params.business}`
      );
      await checkStatus(businessRes);
      const businessData = await businessRes.json();
      businessContext.loadBusiness(
        businessData.business,
        businessData.positions
      );
    } catch (err) {
      props.history.replace("/404");
    }
  };

  const getPosition = async () => {
    try {
      const positionRes = await fetch(
        `${API_URL}/businesses/position?id=${
          props.match.params.position
        }&businessUrl=${props.match.params.business}`
      );

      await checkStatus(positionRes);
      const positionData = await positionRes.json();
      positionContext.loadPosition(positionData);
    } catch (err) {
      props.history.replace(`/${props.match.params.business}`);
    }
  };

  useEffect(() => {
    if (!businessContext.business.loaded) {
      getBusiness();
    }

    if (!(positionContext.id === props.match.params.position)) {
      getPosition();
    }
  }, []);

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [props.match.params.pageId]);

  // Get the ID of the page if there is one.
  const pageId = props.match.params.pageId && Number(props.match.params.pageId);

  // Using the pageId, find the percentage of the application completed
  const percentageComplete =
    ((pageId + 1) / positionContext.availableGroups.length) * 100;

  // Once the questions have loaded, get the name of the question group using the pageId
  const group =
    pageId !== undefined && positionContext.availableGroups.length > 0
      ? positionContext.availableGroups[pageId]
      : "";

  // Once the questions have loaded, get the list of questions using the pageId and group name.
  const questions = (pageId !== undefined &&
    isQuestionsGroup(group) &&
    positionContext.questions &&
    positionContext.questions.find(obj => obj.groupName === group)) || {
    questions: []
  };

  const nextPage = `/${props.match.params.business}/${
    props.match.params.position
  }/${pageId === undefined ? 0 : pageId + 1}`;

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
    custom: "POSITION SPECIFIC"
  };

  const menuVisible = () => {
    return props.match.params.pageId !== undefined && group !== "complete";
  };

  return (
    <App>
      <Helmet>
        <title>{businessContext.business.name}</title>
      </Helmet>
      <Header business={business} positionName={positionContext.details.name} />
      <ApplicationContainer>
        <Route
          path="/:business/:position"
          exact
          render={props => (
            <Description
              description={positionContext.details.description}
              nextPage={nextPage}
            />
          )}
        />
        <Route
          path="/:business/:position/:pageId"
          render={props => (
            <>
              <Menu visible={menuVisible()} />
              {isQuestionsGroup(group) && (
                <QuestionsGroup
                  title={titles[group]}
                  percentage={percentageComplete}
                  total={positionContext.availableGroups.length}
                  nextPage={nextPage}
                  notice="* indicates required field"
                >
                  <Questions
                    group={group}
                    questions={questions.questions}
                    answersGroup={positionContext[group]}
                  />
                </QuestionsGroup>
              )}
              {group === "workHistory" && (
                <QuestionsGroup
                  title={titles[group]}
                  percentage={percentageComplete}
                  total={positionContext.availableGroups.length}
                  nextPage={nextPage}
                  notice="Please provide information for the last two years of your employment"
                >
                  <WorkHistoryGroup />
                </QuestionsGroup>
              )}
              {group === "personalRefs" && (
                <QuestionsGroup
                  title={titles[group]}
                  percentage={percentageComplete}
                  total={positionContext.availableGroups.length}
                  nextPage={nextPage}
                  notice="Please provide three personal references"
                >
                  <PersonalRefsGroup />
                </QuestionsGroup>
              )}
              {group === "eduHistory" && (
                <QuestionsGroup
                  title={titles[group]}
                  percentage={percentageComplete}
                  total={positionContext.availableGroups.length}
                  nextPage={nextPage}
                  notice="Please provide your educational history, starting with high school"
                >
                  <EduHistoryGroup />
                </QuestionsGroup>
              )}
              {group === "availability" && (
                <QuestionsGroup
                  title={titles[group]}
                  percentage={percentageComplete}
                  total={positionContext.availableGroups.length}
                  nextPage={nextPage}
                  notice="What days and times are you available? Please select all that apply:"
                >
                  <ShiftTimes />
                </QuestionsGroup>
              )}
              {group === "finish" && (
                <Finish
                  percentage={percentageComplete}
                  total={positionContext.availableGroups.length}
                />
              )}
              {group === "complete" && <Complete />}
            </>
          )}
        />
      </ApplicationContainer>
      <Footer />
    </App>
  );
};

export default PositionPage;
