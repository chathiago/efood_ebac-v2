import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string
  image: string
  title: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },

    addItem: (state, action: PayloadAction<CartItem>) => {
      const exist = state.items.find((item) => item.title === action.payload.title)
      if (exist) {
        exist.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { toggleCart, addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
