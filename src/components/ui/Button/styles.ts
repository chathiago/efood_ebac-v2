import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary";

interface StyledButtonProps {
  variant: ButtonVariant;
  fullWidth: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ theme, variant }) =>
    variant === "primary"
      ? css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.secondary};
        `
      : css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.primary};
        `}
`;
