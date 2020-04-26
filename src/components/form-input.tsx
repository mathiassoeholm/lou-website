import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

interface Props<T> extends React.InputHTMLAttributes<T> {
  label: string;
  id: string;
}

const Container = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`;

const labelCss = css`
  display: block;
`;

const inputCss = css`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const FormInput = React.forwardRef<HTMLInputElement, Props<HTMLInputElement>>(
  ({ label, ...inputProps }, ref) => {
    return (
      <Container>
        <label htmlFor={inputProps.id} css={labelCss}>
          {label}
        </label>
        <input ref={ref} css={inputCss} {...inputProps} />
      </Container>
    );
  }
);

interface TextAreaProps extends Props<HTMLTextAreaElement> {
  maxLength?: number;
  value?: string;
}

const FormTextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, maxLength, ...textAreaProps }, ref) => {
    let currentLength = 0;
    let valueIsTooLong = false;

    if (maxLength !== undefined && textAreaProps.value !== undefined) {
      currentLength = [...textAreaProps.value].length;
      valueIsTooLong = currentLength > maxLength;
    }

    return (
      <Container>
        <div
          css={css`
            display: flex;
          `}
        >
          <label
            htmlFor={textAreaProps.id}
            css={css`
              ${labelCss}
              flex: 1;
            `}
          >
            {label}
          </label>
          {maxLength !== undefined && (
            <span
              css={css`
                color: ${valueIsTooLong
                  ? "var(--error-color)"
                  : "var(--secondary-info-color)"};
              `}
            >
              ({currentLength}/{maxLength})
            </span>
          )}
        </div>
        <textarea
          ref={ref}
          css={css`
            ${inputCss}
            min-height: 5rem;
            resize: vertical;
          `}
          {...textAreaProps}
        />
      </Container>
    );
  }
);

export { FormInput, FormTextArea };
