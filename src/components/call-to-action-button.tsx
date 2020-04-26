import React, { ButtonHTMLAttributes } from "react";
import { css } from "@emotion/core";

const CallToActionButton = React.forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button
      ref={ref}
      css={css`
        margin: auto;
        background: var(--call-to-action-color);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        appearance: none;
        border: none;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        transition: ease-in-out 200ms;

        :hover {
          filter: brightness(120%);
        }

        :disabled {
          filter: none;
          opacity: 70%;
          cursor: default;
        }
      `}
      {...props}
    />
  );
});

export { CallToActionButton };
