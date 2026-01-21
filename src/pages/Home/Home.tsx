import { Link } from 'react-router-dom';

import { Text } from '../../components/ui/Text';
import { CardHighlight } from '../../components/common/CardHighlight';
import { Footer } from '../../components/common/Footer';
import { Grid } from '../../components/layout/Grid';

import { restaurantsData } from '../../data/restaurantsData';

import efoodLogo from '/logo-efood.png';

import * as S from './styles';

export function Home() {
  return (
    <>
      <S.Header>
        <S.HeaderLogo>
          <Link to="/">
            <img src={efoodLogo} alt="Logo Efood" />
          </Link>
        </S.HeaderLogo>

        <S.HeaderTitle>
          <Text variant="title" color="primary">
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </Text>
        </S.HeaderTitle>
      </S.Header>

      <main>
        <S.HeaderGrid>
          <Grid columns={2} gap="80px">
            {restaurantsData.map((card, index) => (
              <CardHighlight
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                rating={card.rating}
                highlight={card.highlight}
                category={card.category}
              />
            ))}
          </Grid>
        </S.HeaderGrid>
      </main>

      <Footer />
    </>
  );
}
