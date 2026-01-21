import { useState } from 'react';
import { CategoryHeader } from '../../components/common/CategoryHeader';
import { italianaFoods } from '../../data/italianFoods';
import { Footer } from '../../components/common/Footer';
import { Grid } from '../../components/layout/Grid';
import CardRestaurant from '../../components/common/CardRestaurant';
import { CardModal } from '../../components/modal/CardModal';
import { foodsCardModal } from '../../data/italianFoodsModal';
import { PageGrid } from '../../components/layout/PageGrid/styles';

export function Italiana() {

  const [selectIndex, setSelectIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectIndex(index)
  }

  const closeModal = () => {
    setSelectIndex(null)
  }

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
              description={card.description}
              onClick={() => openModal(index)}
            />
          ))}
        </Grid>
      </PageGrid>

      {selectIndex !== null && foodsCardModal[selectIndex] && (
        <CardModal
          image={foodsCardModal[selectIndex].image}
          title={foodsCardModal[selectIndex].title}
          description={foodsCardModal[selectIndex].description}
          serves={foodsCardModal[selectIndex].serves}
          price={foodsCardModal[selectIndex].price}
          onClose={closeModal}
        />
      )}



      <Footer />
    </>
  );
}
