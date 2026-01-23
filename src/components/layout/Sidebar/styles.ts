import styled from 'styled-components'

export const SideOverlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`

export const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 360px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`
