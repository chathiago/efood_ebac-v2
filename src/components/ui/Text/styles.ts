import styled, { css } from "styled-components";

export type TextVariant = "title" | "subtitle" | "body" | "small";
export type TextWeight = "normal" | "bold" | "light";
export type ThemeColor = "primary" | "secondary" | "highlight" | "text";

interface StyledTextProps {
  variant: TextVariant;
  weight?: TextWeight;
  color: ThemeColor;
}

const variantStyles = {
  title: css`
    font-size: 36px;
    font-weight: bold;
  `,
  subtitle: css`
    font-size: 18px;
    font-weight: 700;
  `,
  body: css`
    font-size: 14px;
    font-weight: 400;
  `,
  small: css`
    font-size: 12px;
    font-weight: 300;
  `,
};

const weightMap: Record<TextWeight, number> = {
  normal: 400,
  bold: 700,
  light: 200,
};

export const StyledText = styled.span<StyledTextProps>`
  ${({ variant }) => variantStyles[variant]};

  color: ${({ theme, color }) => theme.colors[color]};

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weightMap[weight]};
    `}
`;
