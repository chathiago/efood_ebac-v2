import { Link } from 'react-router-dom';
import type { CategoryKey } from '../../../data/categoryRoutes';

import { Text } from '../../ui/Text';
import { Button } from '../../ui/Button';
import { categoryRoutes } from '../../../data/categoryRoutes';

import {
  Card,
  CardTags,
  CardHeader,
  CardDescription,
  CardButton,
  CardImage
} from './styles';

interface CardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  highlight?: string;
  category: CategoryKey;
}

export function CardHighlight({
  image,
  title,
  description,
  rating,
  highlight,
  category
}: CardProps) {
  return (
    <Card>
      <CardTags>
        {highlight && <Button variant="primary">{highlight}</Button>}

        <Link to={categoryRoutes[category]}>
          <Button variant="primary">{category}</Button>
        </Link>
      </CardTags>

      <CardImage src={image} alt={title} />

      <CardHeader>
        <Text variant="subtitle" color="primary">{title}</Text>
        <Text variant="subtitle" color="primary">{rating} ⭐</Text>
      </CardHeader>

      <CardDescription>
        <Text variant="body" color="primary">{description}</Text>
      </CardDescription>

      <CardButton>
        <Link to={categoryRoutes[category]}>
          <Button variant="primary">Saiba mais</Button>
        </Link>
      </CardButton>
    </Card>
  );
}
