import React, { useState } from "react";
import { API_URL } from "../constants/urls";
import { withRouter } from "react-router-dom";

export const PositionContext = React.createContext({
  details: {},
  loadPosition: () => {},
  basicGroup: {},
  positionGroup: {},
  historyGroup: {},
  generalGroup: {},
  skillsGroup: {},
  otherGroup: {},
  customGroup: {},
  availableGroups: [],
  workHist: [],
  eduHist: [],
  personalRefs: [],
  addWorkHist: () => {},
  addEduHist: () => {},
  updateWorkHist: () => {},
  updateEdukHist: () => {},
  updatePersonalRefs: () => {},
  updateShiftTimes: () => {}
});

const PositionContextComponent = props => {
  const [questions, setQuestions] = useState([]);
  const [details, setDetails] = useState({
    id: "",
    name: "",
    description: "",
    availability: false,
    shiftTimes: {},
    workHistory: false,
    eduHistory: false,
    personalRefs: false
  });

  const workHistSchema = {
    employer_name: "",
    address: "",
    title: "",
    duties: "",
    start_date: "",
    end_date: "",
    reason_for_leaving: "",
    supervisors_name: "",
    phone: "",
    can_contact: false
  };

  const personalRefsSchema = {
    name: "",
    address: "",
    relationship: "",
    email: "",
    years_known: "", //Integer
    phone: ""
  };

  const eduHistSchema = {
    school_type: "",
    school_name: "",
    location: "",
    field_of_study: "",
    degree: "",
    years_completed: "", // Integer
    phone: ""
  };

  const shiftTimesSchema = {
    mon_first: false,
    mon_second: false,
    mon_third: false,
    tues_first: false,
    tues_second: false,
    tues_third: false,
    wed_first: false,
    wed_second: false,
    wed_third: false,
    thurs_first: false,
    thurs_second: false,
    thurs_third: false,
    fri_first: false,
    fri_second: false,
    fri_third: false,
    sat_first: false,
    sat_second: false,
    sat_third: false,
    sun_first: false,
    sun_second: false,
    sun_third: false
  };

  const [availableGroups, setAvailableGroups] = useState([]);
  const [visitedGroups, setVisitedGroups] = useState({});
  const [basicGroup, setBasicGroup] = useState({});
  const [positionGroup, setPositionGroup] = useState({});
  const [historyGroup, setHistoryGroup] = useState({});
  const [generalGroup, setGeneralGroup] = useState({});
  const [skillsGroup, setSkillsGroup] = useState({});
  const [otherGroup, setOtherGroup] = useState({});
  const [customGroup, setCustomGroup] = useState({});
  const [workHist, setWorkHist] = useState([workHistSchema]);
  const [eduHist, setEduHist] = useState([eduHistSchema]);
  const [personalRefs, setPersonalRefs] = useState([
    personalRefsSchema,
    personalRefsSchema,
    personalRefsSchema
  ]);
  const [shiftTimesAnswers, setShiftTimesAnswers] = useState(shiftTimesSchema);

  const addWorkHist = () => setWorkHist([...workHist, workHistSchema]);
  const addEduHist = () => setEduHist([...eduHist, eduHistSchema]);

  const updateWorkHist = (group, item, value) => {
    // Get the group and make a copy the updates value belongs to
    const newGroup = { ...workHist[group] };

    // update the groups key with the new value
    newGroup[item] = value;

    setWorkHist([
      ...workHist.slice(0, group),
      newGroup,
      ...workHist.slice(group + 1)
    ]);
  };

  const updateEduHist = (group, item, value) => {
    // Get the group and make a copy the updates value belongs to
    const newGroup = { ...eduHist[group] };
    if (item === "years_completed") {
      newGroup[item] = Number(value);
    } else {
      newGroup[item] = value;
    }
    // update the groups key with the new value

    setEduHist([
      ...eduHist.slice(0, group),
      newGroup,
      ...eduHist.slice(group + 1)
    ]);
  };

  const updatePersonalRefs = (group, item, value) => {
    // Get the group and make a copy the updates value belongs to
    const newGroup = { ...personalRefs[group] };
    if (item === "years_known") {
      newGroup[item] = Number(value);
    } else {
      newGroup[item] = value;
    }
    // update the groups key with the new value

    setPersonalRefs([
      ...personalRefs.slice(0, group),
      newGroup,
      ...personalRefs.slice(group + 1)
    ]);
  };

  const updateShiftTimesAnswer = (shift, value) => {
    setShiftTimesAnswers({
      ...shiftTimesAnswers,
      [shift]: value
    });
  };

  const updateAllShiftTimesAnswer = shifts => {
    setShiftTimesAnswers({
      ...shiftTimesAnswers,
      ...shifts
    });
  };

  const changeHandler = (group, setGroup) => (id, value, sub) => e => {
    let updatedQuestion = group[id];
    if (sub) {
      updatedQuestion = { ...updatedQuestion, subValue: value };
    } else {
      updatedQuestion = { ...updatedQuestion, value };
    }
    setGroup({ ...group, [id]: updatedQuestion });
  };

  const loadPosition = position => {
    setQuestions(position.questions);
    setDetails({
      id: position.id,
      business_id: position.business_id,
      name: position.name,
      description: position.description,
      availability: position.availability,
      shiftTimes: position.shift_times,
      workHistory: position.work_history,
      eduHistory: position.educational_history,
      personalRefs: position.personal_references
    });
    let groupsWithQuestions = [];
    let visitedGroup = {};
    position.questions.forEach(async questionsGroup => {
      if (questionsGroup.questions.length > 0) {
        groupsWithQuestions.push(questionsGroup.groupName);
        visitedGroup[questionsGroup.groupName] = false;

        let setGroup;
        switch (questionsGroup.groupName) {
          case "basic":
            setGroup = setBasicGroup;
            break;
          case "position":
            setGroup = setPositionGroup;
            break;
          case "history":
            setGroup = setHistoryGroup;
            break;
          case "general":
            setGroup = setGeneralGroup;
            break;
          case "skills":
            setGroup = setSkillsGroup;
            break;
          case "other":
            setGroup = setOtherGroup;
            break;
          case "custom":
            setGroup = setCustomGroup;
            break;
          default:
            setGroup = setBasicGroup;
        }

        let newQuestions = questionsGroup.questions.reduce((obj, question) => {
          let defaultValue =
            question.type === "multi"
              ? question.options && question.options[0]
              : question.type === "bool"
              ? false
              : "";
          let defaultSubValue = question.sub_type === "text" ? "" : false;
          return {
            ...obj,
            [question.id]: {
              value: defaultValue,
              subValue: defaultSubValue,
              required: question.is_required
            }
          };
        }, {});
        await setGroup(newQuestions);
      }
    });
    if (position.availability) {
      groupsWithQuestions.push("availability");
      visitedGroup["availability"] = false;
    }
    // Shift times
    if (position.work_history) {
      groupsWithQuestions.push("workHistory");
      visitedGroup["workHistory"] = false;
    }

    if (position.personal_refs) {
      groupsWithQuestions.push("personalRefs");
      visitedGroup["personalRefs"] = false;
    }

    if (position.educational_history) {
      groupsWithQuestions.push("eduHistory");
      visitedGroup["eduHistory"] = false;
    }

    groupsWithQuestions.push("finish");
    visitedGroup["finish"] = false;
    setAvailableGroups(groupsWithQuestions);
    setVisitedGroups(visitedGroup);
  };

  const submitApplication = completeURL => {
    // iterate over each group
    const answers = [];
    const getAnswers = group => {
      Object.keys(group).forEach(key => {
        let answer = {
          question_id: key
        };
        if (typeof group[key].value === "boolean") {
          answer.answer_bool = group[key].value;
        } else {
          answer.answer_text = group[key].value;
        }

        if (typeof group[key].subValue === "boolean") {
          answer.sub_question_ans_bool = group[key].subValue;
        } else {
          answer.sub_question_ans_text = group[key].subValue;
        }
        answers.push(answer);
      });
    };
    getAnswers(basicGroup);
    getAnswers(positionGroup);
    getAnswers(historyGroup);
    getAnswers(generalGroup);
    getAnswers(skillsGroup);
    getAnswers(otherGroup);
    getAnswers(customGroup);
    const validatedPersonalRefs = personalRefs.map(ref => {
      return {
        ...ref,
        years_known: ref.years_known === "" ? 0 : Number(ref.years_known)
      };
    });

    const validatedEduHist = eduHist.map(school => {
      return {
        ...school,
        years_completed:
          school.years_completed === "" ? 0 : Number(school.years_completed)
      };
    });
    const application = {
      answers,
      workRefs: workHist,
      personalRefs: validatedPersonalRefs,
      educationalHistory: validatedEduHist,
      availability: shiftTimesAnswers
    };
    fetch(
      `${API_URL}/apps/application?pid=${details.id}&bid=${details.business_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(application)
      }
    )
      .then(() => {
        props.history.push(completeURL);
      })
      .catch(err => {});
  };

  const changeVisitedGroup = group => {
    setVisitedGroups({ ...visitedGroups, [group]: true });
  };
  return (
    <PositionContext.Provider
      value={{
        details,
        loadPosition,
        basic: {
          group: basicGroup,
          changeHandler: changeHandler(basicGroup, setBasicGroup)
        },
        position: {
          group: positionGroup,
          changeHandler: changeHandler(positionGroup, setPositionGroup)
        },
        history: {
          group: historyGroup,
          changeHandler: changeHandler(historyGroup, setHistoryGroup)
        },
        general: {
          group: generalGroup,
          changeHandler: changeHandler(generalGroup, setGeneralGroup)
        },
        skills: {
          group: skillsGroup,
          changeHandler: changeHandler(skillsGroup, setSkillsGroup)
        },
        other: {
          group: otherGroup,
          changeHandler: changeHandler(otherGroup, setOtherGroup)
        },
        custom: {
          group: customGroup,
          changeHandler: changeHandler(customGroup, setCustomGroup)
        },
        availableGroups,
        visitedGroups,
        workHist,
        eduHist,
        personalRefs,
        addWorkHist,
        addEduHist,
        updateWorkHist,
        updateEduHist,
        updatePersonalRefs,
        shiftTimesAnswers,
        updateShiftTimesAnswer,
        updateAllShiftTimesAnswer,
        submitApplication,
        questions,
        changeVisitedGroup
      }}
    >
      {props.children}
    </PositionContext.Provider>
  );
};

export default withRouter(PositionContextComponent);
