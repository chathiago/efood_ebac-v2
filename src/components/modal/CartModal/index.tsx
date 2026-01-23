import { Sidebar, SideOverlay } from "../../layout/Sidebar/styles"
import { Text } from "../../ui/Text"
import trashIcon from "../../../../public/trash-cart.png"
import * as S from "./styles"

type CartModalProps = {
  image: string
  title: string
  price: number
  onClose: () => void
}

export function CartModal({ image, title, price, onClose }: CartModalProps) {
  return (
    <SideOverlay onClick={onClose}>
      <Sidebar onClick={(e) => e.stopPropagation()}>
        <S.ProductDiv>
          <img src={image} alt={title} />
          <Text variant="subtitle" color="primary">{title}</Text>
          <Text variant="body" color="primary">{price}</Text>
          <a href="#"><img src={trashIcon} alt="delete" /></a>
        </S.ProductDiv>
      </Sidebar>
    </SideOverlay>
  )
}
