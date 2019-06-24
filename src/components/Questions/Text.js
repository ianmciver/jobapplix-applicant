import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { dark, placeholderText } from "../../constants/colors";

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const Label = styled.label`
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 300ms;
  ${props =>
    props.large &&
    css`
      font-size: 1.3rem;
    `};
`;

const TextInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid ${dark};
  padding: 5px 0;
  font-size: 1.4rem;

  &:placeholder {
    color: ${placeholderText};
  }
`;

const Text = props => {
  const [textValue, setTextValue] = useState(props.value);
  const [labelVisible, setLabelVisible] = useState(false);
  useEffect(() => {
    if (textValue && textValue.length > 0) {
      setLabelVisible(true);
    } else {
      setLabelVisible(false);
    }
  }, [textValue]);
  return (
    <TextContainer>
      <Label
        visible={props.labelVisible || labelVisible}
        large={props.labelVisible}
      >
        {props.question}
      </Label>
      <TextInput
        type="text"
        placeholder={props.labelVisible ? "" : props.question}
        value={textValue}
        onChange={e => {
          if (props.validator) {
            setTextValue(props.validator(e.target.value));
          } else {
            setTextValue(e.target.value);
          }
        }}
        onBlur={props.changeHandler(props.id, textValue)}
      />
    </TextContainer>
  );
};

export default Text;
