import { Link } from 'react-router-dom';
import type { CategoryKey } from '../../../data/categoryRoutes';

import { Text } from '../../ui/Text';
import { Button } from '../../ui/Button';
import { categoryRoutes } from '../../../data/categoryRoutes';

import * as S from './styles';

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
    <>
      <S.Card>
        <S.CardTags>
          {highlight && <Button variant="primary">{highlight}</Button>}

          <Link to={categoryRoutes[category]}>
            <Button variant="primary">{category}</Button>
          </Link>
        </S.CardTags>

        <Link to={categoryRoutes[category]}>
          <S.CardImage src={image} alt={title} />
        </Link>

        <S.CardHeader>
          <Text variant="subtitle" color="primary">{title}</Text>
          <Text variant="subtitle" color="primary">{rating} ⭐</Text>
        </S.CardHeader>

        <S.CardDescription>
          <Text variant="body" color="primary">{description}</Text>
        </S.CardDescription>

        <S.CardButton>
          <Link to={categoryRoutes[category]}>
            <Button variant="primary">Saiba mais</Button>
          </Link>
        </S.CardButton>
      </S.Card >
    </>
  );
}
