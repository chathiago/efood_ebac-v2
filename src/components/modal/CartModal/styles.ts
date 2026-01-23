import styled from 'styled-components'

export const ProductDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 8px;

  img {
    max-width: 80px;
    height: auto;
  }
`
