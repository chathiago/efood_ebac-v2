import { Link } from 'react-router-dom';

import { Text } from '../../ui/Text';
import { categoryRoutes } from '../../../data/categoryRoutes';

import {
  CategoryHeaderStyled,
  HeaderCategoryLogo,
  CategoryBanner,
  CategoryTitle,
  CategoryRestaurant
} from './styles';

import efoodLogo from '/logo-efood.png';

interface CategoryHeaderProps {
  category: keyof typeof categoryRoutes;
}

const categoryData: Record<
  keyof typeof categoryRoutes,
  { name: string; banner: string }
> = {
  italiana: {
    name: 'La Dolce Vita Trattoria',
    banner: '/restaurants/la-dolce-vitta.png'
  },
  japonesa: {
    name: 'Hioki Sushi',
    banner: '/restaurants/hioki-sushi.png'
  }
};

export function CategoryHeader({ category }: CategoryHeaderProps) {
  const displayCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const { name, banner } = categoryData[category];

  return (
    <>
      <CategoryHeaderStyled>
        <Text variant="subtitle" color="primary">
          Restaurantes
        </Text>

        <Link to="/">
          <HeaderCategoryLogo src={efoodLogo} alt="Efood Logo" />
        </Link>

        <Text variant="subtitle" color="primary">
          <span>0</span> produto(s) no carrinho
        </Text>
      </CategoryHeaderStyled>

      <CategoryBanner $bgImage={banner}>
        <CategoryTitle>
          <Text variant="title" color="highlight" weight="light">
            {displayCategory}
          </Text>

          <CategoryRestaurant>
            <Text variant="title" color="highlight">
              {name}
            </Text>
          </CategoryRestaurant>
        </CategoryTitle>
      </CategoryBanner>
    </>
  );
}
