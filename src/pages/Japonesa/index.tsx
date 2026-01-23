import { useState } from 'react';
import { CategoryHeader } from '../../components/common/CategoryHeader';
import { Footer } from '../../components/common/Footer';
import { Grid } from '../../components/layout/Grid';
import { japonesaFoods } from '../../data/japanFoods';
import CardRestaurant from '../../components/common/CardRestaurant';
import { CardModal } from '../../components/modal/CardModal';
import { PageGrid } from '../../components/layout/PageGrid/styles';

export function Japonesa() {
  const [selectIndex, setSelectIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectIndex(index)
  }

  const closeModal = () => {
    setSelectIndex(null)
  }

  const selectedFood =
    selectIndex !== null ? japonesaFoods[selectIndex] : null

  return (
    <>
      <CategoryHeader category="japonesa" />

      <PageGrid>
        <Grid columns={3} gap="30px">
          {japonesaFoods.map((card, index) => (
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
