import { Button } from '../../ui/Button';
import { Text } from '../../ui/Text';

import * as S from './styles';

type CardRestaurantProps = {
  image: string;
  title: string;
  description: string;
  onClick: () => void
}

export default function CardRestaurant({ image, title, description, onClick }: CardRestaurantProps) {
  return (
    <S.RestaurantCard onClick={onClick}>
      <S.RestaurantImage src={image} alt={title} />

      <S.RestaurantText>
        <Text variant="subtitle" color="secondary">{title}</Text>
        <Text variant="body" color="secondary" weight="normal">{description}</Text>
      </S.RestaurantText>

      <S.RestaurantButton>
        <Button variant="secondary" fullWidth={true}>
          Adicionar ao carrinho
        </Button>
      </S.RestaurantButton>
    </S.RestaurantCard>
  );
}
