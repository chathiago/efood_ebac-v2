import type { ReactNode } from 'react';
import { StyledButton } from './styles';
import type { ButtonVariant } from './styles';

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  children,
  className,
  fullWidth = false
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      fullWidth={fullWidth}
      className={className}
    >
      {children}
    </StyledButton>
  );
}
