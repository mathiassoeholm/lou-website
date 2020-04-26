import React from "react";
import { useForm, OnSubmit } from "react-hook-form";
import { ContactSubmission } from "api";
import { FormInput, FormTextArea } from "./form-input";
import { CallToActionButton } from "./call-to-action-button";
import { css } from "@emotion/core";

interface IProps {
  onSubmit: OnSubmit<ContactSubmission>;
}

const ContactForm: React.FC<IProps> = (props) => {
  const { register, handleSubmit } = useForm<ContactSubmission>();

  return (
    <form
      onSubmit={handleSubmit(props.onSubmit)}
      css={css`
        display: grid;
        grid-gap: 1rem;
        max-width: 40rem;
        width: 100%;
      `}
    >
      <FormInput
        id="name"
        label="Navn"
        name="name"
        ref={register({ required: true })}
      />
      <FormInput
        id="email"
        label="Email"
        name="email"
        ref={register({ required: true })}
      />
      <FormInput
        id="subject"
        label="Emne"
        name="subject"
        ref={register({ required: true })}
      />
      <FormTextArea
        id="message"
        label="Besked"
        name="message"
        ref={register({ required: true })}
        css={css`
          min-height: 15rem;
        `}
      />
      <CallToActionButton>Indsend</CallToActionButton>
    </form>
  );
};

export { ContactForm };
