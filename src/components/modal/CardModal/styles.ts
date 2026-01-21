import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const CardModal = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 1024px;
  height: 344px;

  img {
    padding: 32px 24px 32px 32px;
  }
`

export const CardModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;
  padding-right: 32px;
`
