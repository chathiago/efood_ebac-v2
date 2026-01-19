import type { ReactNode } from 'react';
import { StyledText } from './styles';
import type { TextVariant, TextWeight, ThemeColor } from './styles';


interface TextProps {
  variant?: TextVariant;
  color?: ThemeColor;
  weight?: TextWeight;
  children: ReactNode;
  className?: string;
}

export function Text({
  variant = 'body',
  color = 'text',
  weight,
  children,
  className
}: TextProps) {
  return (
    <StyledText
      variant={variant}
      color={color}
      weight={weight}
      className={className}
    >
      {children}
    </StyledText>
  );
}
