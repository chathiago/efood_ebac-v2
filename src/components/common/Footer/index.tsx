import { Link } from 'react-router-dom';
import { Text } from '../../ui/Text';
import { FooterContainer, FooterLogo, FooterSocial } from './styles';

import efoodLogo from '/logo-efood.png';
import socialLogos from '/redes-sociais.png';

export function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>
        <Link to="/">
          <img src={efoodLogo} alt="Logo Efood" />
        </Link>
      </FooterLogo>

      <FooterSocial>
        <img src={socialLogos} alt="Redes Sociais" />
      </FooterSocial>

      <Text variant="small" color="primary">
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
        <br />
        qualidade dos produtos é toda do estabelecimento contratado.
      </Text>
    </FooterContainer>
  );
}
