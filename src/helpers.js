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
