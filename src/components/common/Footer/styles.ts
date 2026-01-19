import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 298px;
  text-align: center;
`;

export const FooterLogo = styled.div`
  margin-top: 40px;
  margin-bottom: 32px;
`;

export const FooterSocial = styled.div`
  margin-bottom: 80px;
`;
