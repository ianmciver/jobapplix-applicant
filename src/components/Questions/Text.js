import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const Label = styled.label`
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 300ms;
  margin-bottom: 5px;

  ${props =>
    props.large &&
    css`
      font-size: 1.4rem;
    `};
`;

const TextInput = styled.input`
  display: block;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  transition: all 0.3s;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  border-color: ${props => props.error && `#e57373`};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.backgroundGreen};
  }

  &:placeholder {
    color: ${props => props.theme.placeholderText};
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
