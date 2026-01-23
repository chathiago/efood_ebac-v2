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
  padding: 32px;
  align-items: center;
  gap: 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    object-position: center;
    flex-shrink: 0;
  }
`

export const CardModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  flex: 1;
  overflow: hidden;
  word-break: break-word;

  button {
    align-self: flex-start;
  }
`
