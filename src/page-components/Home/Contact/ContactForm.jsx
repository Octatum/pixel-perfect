import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../../components/Text';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  > label:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const Label = styled.label`
  display: flex;
`;

const Input = styled(Text)`
  background: black;
  flex: 4;
  border: 0;
  border-bottom: 1px solid white;
  padding: 0.2em;
  resize: none;
  outline-color: white;
`;

const FlexText = styled(Text)`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

const ContactForm = () => {
  return (
    <Form>
      <Label>
        <FlexText as="div">Name</FlexText>
        <Input as="input" />
      </Label>
      <Label>
        <FlexText as="div">Company</FlexText>
        <Input as="input" />
      </Label>
      <Label>
        <FlexText as="div">Message</FlexText>
        <Input as="textarea" />
      </Label>
    </Form>
  );
};

export default ContactForm;
