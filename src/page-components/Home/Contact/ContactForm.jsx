import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, FastField } from 'formik';

import Text from '../../../components/Text';
import Button from '../../../components/Button';
import { device } from '../../../utils/device';
import { validationSchema, initialValues } from './formSchema';
import LabelInput from '../../../components/Input';
import encode from '../../../utils/encode';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  > label:not(:last-child) {
    margin-bottom: 1.5em;
  }
`;

const FlexDiv = styled('div')`
  flex: ${({ flex }) => flex || 1};
  justify-content: ${({ justify }) => justify};
  display: flex;
  align-items: ${({ align }) => align};
`;

const ButtonSection = styled('div')`
  display: flex;
  justify-content: flex-end;

  ${device.mobile} {
    flex-direction: column;
  }
`;

const FormErrorText = styled(Text)`
  color: red;
`;

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const formName = 'contacto';

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        setFormError(false);
        try {
          await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': formName,
              ...values,
            }),
          });
          setMessageSent(true);
          alert('Your message has been sent');
        } catch (exception) {
          setFormError(true);
        }

        actions.setSubmitting(false);
      }}
      render={props => (
        <Form
          name={formName}
          onSubmit={props.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p hidden>
            <label>
              Don’t fill this out: <FastField name="bot-field" />
            </label>
          </p>
          <LabelInput labelText="Name" name="name" disabled={messageSent} />
          <LabelInput labelText="Email" name="email" disabled={messageSent} />
          <LabelInput
            labelText="Message"
            name="message"
            component="textarea"
            disabled={messageSent}
          />
          <ButtonSection>
            <FlexDiv flex={4}>
              {formError && (
                <FormErrorText>
                  There was an error sending your message.
                </FormErrorText>
              )}
            </FlexDiv>
            <FlexDiv align="flex-start" justify="flex-end">
              <Text type="submit" as={Button} disabled={messageSent}>
                Send
              </Text>
            </FlexDiv>
          </ButtonSection>
        </Form>
      )}
    />
  );
};

export default ContactForm;
