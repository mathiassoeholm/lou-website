import React, { useState } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { FormInput, FormTextArea } from "./form-input";
import { CallToActionButton } from "./call-to-action-button";

const BannerTriangle = styled.svg`
  fill: var(--accent-color);
  filter: brightness(60%);
  height: 1.5rem;
  width: 1.5rem;
`;

const SpacingRow = styled.div`
  height: 0.5rem;
`;

interface FormValue {
  author: string;
  text: string;
}

interface Props {
  onSubmit: (value: FormValue) => void;
}

const MAX_COMMENT_LENGTH = 1000;

const CommentForm: React.FC<Props> = ({ onSubmit }) => {
  const [formValue, setFormValue] = useState<FormValue>({
    author: "",
    text: "",
  });

  function onChangeInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const commentIsTooLong = formValue.text.length > MAX_COMMENT_LENGTH;

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: auto 1fr auto;
      `}
    >
      <h2
        css={css`
          grid-column: span 3;
          text-align: center;
          background: var(--accent-color);
          color: white;
          font-weight: 600;
          margin: 0;
          padding: 0.25rem;
          position: relative;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        `}
      >
        Skriv en kommentar
      </h2>
      <BannerTriangle
        css={css``}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 100,0 100,100" />
      </BannerTriangle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formValue);
        }}
        css={css`
          background: var(--card-color);
          padding: 1rem;
          display: grid;
          grid-gap: 0.5rem;
        `}
      >
        <FormInput
          id="author"
          name="author"
          label="Dit navn"
          type="text"
          onChange={onChangeInput}
          value={formValue.author}
        />
        <SpacingRow />
        <FormTextArea
          name="text"
          id="text"
          label="Kommentar"
          maxLength={MAX_COMMENT_LENGTH}
          onChange={onChangeInput}
          value={formValue.text}
        />
        <SpacingRow />
        <CallToActionButton disabled={commentIsTooLong}>
          Indsend
        </CallToActionButton>
      </form>
      <BannerTriangle viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 0,100" />
      </BannerTriangle>
    </div>
  );
};

export { CommentForm, FormValue };
