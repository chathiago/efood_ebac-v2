import { CategoryHeader } from '../../components/common/CategoryHeader';
import { Footer } from '../../components/common/Footer';
import { Grid } from '../../components/layout/Grid';
import { japonesaFoods } from '../../data/japanFoods';
import { CardRestaurant } from '../../components/common/CardRestaurant';

import { JaponesaGrid } from './styles';

export function Japonesa() {
  return (
    <>
      <CategoryHeader category="japonesa" />

      <JaponesaGrid>
        <Grid columns={3} gap="30px">
          {japonesaFoods.map((card, index) => (
            <CardRestaurant
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </Grid>
      </JaponesaGrid>

      <Footer />
    </>
  );
}
