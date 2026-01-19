import type { ReactNode } from 'react';
import { StyledGrid } from './styles';

interface GridProps {
  children: ReactNode;
  columns?: number;
  gap?: string;
}

export function Grid({
  children,
  columns = 3,
  gap = '16px'
}: GridProps) {
  return (
    <StyledGrid columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  );
}
