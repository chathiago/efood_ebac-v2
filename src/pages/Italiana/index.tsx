import { CategoryHeader } from '../../components/common/CategoryHeader';
import { italianaFoods } from '../../data/italianFoods';
import { CardRestaurant } from '../../components/common/CardRestaurant';
import { Footer } from '../../components/common/Footer';
import { Grid } from '../../components/layout/Grid';

import { ItalianaGrid } from './styles';

export function Italiana() {
  return (
    <>
      <CategoryHeader category="italiana" />

      <ItalianaGrid>
        <Grid columns={3} gap="30px">
          {italianaFoods.map((card, index) => (
            <CardRestaurant
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </Grid>
      </ItalianaGrid>

      <Footer />
    </>
  );
}
