import { createSlice } from "@reduxjs/toolkit";

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

const initialState = {
  details: {
    id: "",
    name: "",
    description: "",
    availability: false,
    shiftTimes: {},
    workHistory: false,
    eduHistory: false,
    personalRefs: false
  },
  questions: [],
  availableGroups: [],
  visitedGroups: {},
  basic: {},
  position: {},
  history: {},
  general: {},
  skills: {},
  other: {},
  custom: {},
  workHist: [workHistSchema],
  eduHist: [eduHistSchema],
  personalRefs: [personalRefsSchema, personalRefsSchema, personalRefsSchema],
  shiftTimesAnswers: shiftTimesSchema
};

const parsePositionData = position => {
  const parsedPosition = {};
  parsedPosition.details = {
    id: position.id,
    business_id: position.business_id,
    name: position.name,
    description: position.description,
    availability: position.availability,
    shiftTimes: position.shift_times,
    workHistory: position.work_history,
    eduHistory: position.educational_history,
    personalRefs: position.personal_references
  };
  parsedPosition.questions = position.questions;
  let groupsWithQuestions = [];
  let visitedGroups = {};
  position.questions.forEach(questionsGroup => {
    if (questionsGroup.questions.length > 0) {
      groupsWithQuestions.push(questionsGroup.groupName);
      visitedGroups[questionsGroup.groupName] = false;

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
      parsedPosition[questionsGroup.groupName] = newQuestions;
    }
  });
  if (position.availability) {
    groupsWithQuestions.push("availability");
    visitedGroups["availability"] = false;
  }
  if (position.work_history) {
    groupsWithQuestions.push("workHistory");
    visitedGroups["workHistory"] = false;
  }

  if (position.personal_refs) {
    groupsWithQuestions.push("personalRefs");
    visitedGroups["personalRefs"] = false;
  }

  if (position.educational_history) {
    groupsWithQuestions.push("eduHistory");
    visitedGroups["eduHistory"] = false;
  }

  groupsWithQuestions.push("finish");
  visitedGroups["finish"] = false;
  parsedPosition.availableGroups = groupsWithQuestions;
  parsedPosition.visitedGroups = visitedGroups;
  return parsedPosition;
};

const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    updateWorkHist: {
      reducer: (state, action) => {
        const { payload } = action;
        state.workHist[payload.group][payload.item] = payload.value;
        return;
      },
      prepare: (group, item, value) => ({ payload: { group, item, value } })
    },
    addWorkHist: {
      reducer: (state, action) => {
        state.workHist.push(workHistSchema);
        return;
      }
    },
    updateEduHist: {
      reducer: (state, action) => {
        const { eduHist } = state;
        const { payload } = action;
        if (payload.item === "years_completed") {
          eduHist[payload.group][payload.item] = Number(payload.value);
        } else {
          eduHist[payload.group][payload.item] = payload.value;
        }
        return;
      },
      prepare: (group, item, value) => ({ payload: { group, item, value } })
    },
    addEduHist: {
      reducer: (state, action) => {
        state.eduHist.push(eduHistSchema);
        return;
      }
    },
    updatePersonalRefs: {
      reducer: (state, action) => {
        const { personalRefs } = state;
        const { payload } = action;
        if (payload.item === "years_known") {
          personalRefs[payload.group][payload.item] = Number(payload.value);
        } else {
          personalRefs[payload.group][payload.item] = payload.value;
        }
        return;
      },
      prepare: (group, item, value) => ({ payload: { group, item, value } })
    },
    updateShiftTimesAnswer: {
      reducer: (state, action) => {
        state.shiftTimesAnswers[action.payload.shift] = action.payload.value;
        return;
      },
      prepare: (shift, value) => ({ payload: { shift, value } })
    },
    updateAllShiftTimesAnswer: {
      reducer: (state, action) => {
        state.shiftTimesAnswers = {
          ...state.shiftTimesAnswers,
          ...action.payload.shifts
        };
        return;
      },
      prepare: shifts => ({ payload: { shifts } })
    },
    changeHandler: {
      reducer: (state, action) => {
        const { group, id, sub, value } = action.payload;
        if (sub) {
          state[group][id].subValue = value;
        } else {
          state[group][id].value = value;
        }
        return;
      },
      prepare: (group, id, value, sub) => ({
        payload: {
          group,
          id,
          value,
          sub
        }
      })
    },
    loadPosition: {
      reducer: (state, action) => {
        return { ...state, ...action.payload.position };
      },
      prepare: position => {
        return { payload: { position: parsePositionData(position) } };
      }
    },
    changeVisitedGroups: {
      reducer: (state, action) => {
        state.visitedGroups[action.payload] = true;
        return;
      },
      prepare: visited => ({
        payload: visited
      })
    }
  }
});

export const {
  loadPosition,
  changeHandler,
  changeVisitedGroups,
  addEduHist,
  updateEduHist,
  addWorkHist,
  updateWorkHist,
  updatePersonalRefs,
  updateShiftTimesAnswer,
  updateAllShiftTimesAnswer
} = positionSlice.actions;
export default positionSlice.reducer;
