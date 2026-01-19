import styled from "styled-components";

export interface GridStyleProps {
  columns: number;
  gap: string;
}

export const StyledGrid = styled.div<GridStyleProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: ${({ gap }) => gap};
`;
