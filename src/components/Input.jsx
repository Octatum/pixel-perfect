import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

import Text, { withTextStyle } from './Text';

const Label = styled('label')`
  display: flex;
  flex-direction: column;
`;

const InputField = styled(Field)`
  background: black;
  flex: 4;
  border: 0;
  border-bottom: 1px solid white;
  padding: 0.25em;
  resize: none;
  outline-color: white;
  color: white;

  :disabled {
    opacity: 0.1;
  }
`;

const PartialErrorField = withTextStyle(ErrorMessage);

const ErrorField = styled(PartialErrorField)`
  color: red;
  opacity: 0.8;
  padding-top: 0.5em;
`;

const FlexLabel = styled('div')`
  display: flex;
`;

const FlexText = styled(Text)`
  flex: 1;
`;

const Input = props => {
  const { labelText, name, ...rest } = props;

  return (
    <Label>
      <FlexLabel>
        {labelText && <FlexText>{labelText}</FlexText>}
        <InputField name={name} {...rest} />
      </FlexLabel>
      <ErrorField component="p" name={name} />
    </Label>
  );
};

Input.defaultProps = {
  labelText: '',
};

export default Input;
