import { Link } from 'react-router-dom';
import { Text } from '../../ui/Text';
import * as S from './styles';

import efoodLogo from '/logo-efood.png';
import socialLogos from '/redes-sociais.png';

export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterLogo>
        <Link to="/">
          <img src={efoodLogo} alt="Logo Efood" />
        </Link>
      </S.FooterLogo>

      <S.FooterSocial>
        <img src={socialLogos} alt="Redes Sociais" />
      </S.FooterSocial>

      <Text variant="small" color="primary">
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
        <br />
        qualidade dos produtos é toda do estabelecimento contratado.
      </Text>
    </S.FooterContainer>
  );
}
