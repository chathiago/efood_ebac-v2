import { Text } from '../../ui/Text'
import { Button } from '../../ui/Button'
import * as S from './styles'

type CardModalProps = {
  image: string
  title: string
  description: string
  serves?: string
  price?: number
  onClose: () => void
}

export function CardModal({ image, title, description, serves, price, onClose }: CardModalProps) {
  return (
    <S.Overlay onClick={onClose}>
      <S.CardModal onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} />

        <S.CardModalContent>
          <Text variant='subtitle' color='secondary'>{title}</Text>
          <Text variant='body' color='secondary'>{description}</Text>
          <Text variant='body' color='secondary'>{serves}</Text>

          <div>
            <Button variant='secondary'>
              Adicionar ao carrinho - R$ {price}
            </Button>
          </div>
        </S.CardModalContent>

      </S.CardModal>
    </S.Overlay>
  )
}
