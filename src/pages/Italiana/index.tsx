import { useState } from 'react';
import { CategoryHeader } from '../../components/common/CategoryHeader';
import { italianaFoods } from '../../data/italianFoods';
import { Footer } from '../../components/common/Footer';
import { Grid } from '../../components/layout/Grid';
import CardRestaurant from '../../components/common/CardRestaurant';
import { CardModal } from '../../components/modal/CardModal';
import { PageGrid } from '../../components/layout/PageGrid/styles';

export function Italiana() {
  const [selectIndex, setSelectIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectIndex(index);
  };

  const closeModal = () => {
    setSelectIndex(null);
  };

  const selectedFood =
    selectIndex !== null ? italianaFoods[selectIndex] : null

  return (
    <>
      <CategoryHeader category="italiana" />

      <PageGrid>
        <Grid columns={3} gap="30px">
          {italianaFoods.map((card, index) => (
            <CardRestaurant
              key={index}
              image={card.image}
              title={card.title}
              resume={card.resume}
              onClick={() => openModal(index)}
            />
          ))}
        </Grid>
      </PageGrid>

      {selectedFood && (
        <CardModal
          image={selectedFood.image}
          title={selectedFood.title}
          description={selectedFood.description}
          serves={selectedFood.serves}
          price={selectedFood.price}
          onClose={closeModal}
        />
      )}

      <Footer />
    </>
  );
}
