import { Button } from '../../ui/Button';
import { Text } from '../../ui/Text';

import {
  RestaurantCard,
  RestaurantImage,
  RestaurantText,
  RestaurantButton
} from './styles';

interface CardRestaurantProps {
  image: string;
  title: string;
  description: string;
}

export function CardRestaurant({ image, title, description }: CardRestaurantProps) {
  return (
    <RestaurantCard>
      <RestaurantImage src={image} alt={title} />

      <RestaurantText>
        <Text variant="subtitle" color="secondary">{title}</Text>
        <Text variant="body" color="secondary" weight="normal">{description}</Text>
      </RestaurantText>

      <RestaurantButton>
        <Button variant="secondary" fullWidth={true}>
          Adicionar ao carrinho
        </Button>
      </RestaurantButton>
    </RestaurantCard>
  );
}
