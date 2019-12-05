export const validateNums = value => {
  let validChars = value.match(/\d+/g);
  if (validChars) {
    validChars = validChars.join("");
  } else {
    validChars = "";
  }
  return validChars;
};

export const checkStatus = response => {
  if (response.ok) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
  }
};

export const parseAnswersForSubmission = position => {
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
  getAnswers(position.basic);
  getAnswers(position.position);
  getAnswers(position.history);
  getAnswers(position.general);
  getAnswers(position.skills);
  getAnswers(position.other);
  getAnswers(position.custom);
  const validatedPersonalRefs = position.personalRefs.map(ref => {
    return {
      ...ref,
      years_known: ref.years_known === "" ? 0 : Number(ref.years_known)
    };
  });

  const validatedEduHist = position.eduHist.map(school => {
    return {
      ...school,
      years_completed:
        school.years_completed === "" ? 0 : Number(school.years_completed)
    };
  });
  const application = {
    answers,
    workRefs: position.workHist,
    personalRefs: validatedPersonalRefs,
    educationalHistory: validatedEduHist,
    availability: position.shiftTimesAnswers
  };
  return application;
};
