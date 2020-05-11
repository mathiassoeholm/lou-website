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
  const { register, handleSubmit, formState } = useForm<ContactSubmission>({
    mode: "onChange",
  });

  if (formState.isSubmitting) {
    return <p data-testid="sending-text">Sender beskeden</p>;
  }

  if (formState.isSubmitted) {
    return <p data-testid="thank-you-text">Tak for din besked!</p>;
  }

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
        required
      />
      <FormInput
        id="email"
        label="Email"
        name="email"
        ref={register({ required: true })}
        required
        type="email"
      />
      <FormInput
        id="subject"
        label="Emne"
        name="subject"
        ref={register({ required: true })}
        required
      />
      <FormTextArea
        id="message"
        label="Besked"
        name="message"
        ref={register({ required: true })}
        required
        css={css`
          min-height: 15rem;
        `}
      />
      <CallToActionButton
        type="submit"
        disabled={!formState.isValid || formState.isSubmitting}
      >
        Indsend
      </CallToActionButton>
    </form>
  );
};

export { ContactForm };
