import { AppStateType } from '../store'
import { Action } from 'redux/index.d'
import { ThunkAction } from 'redux-thunk/index.d'

export type SortByType = {
  type: string
  order: string
}

export type PizzaItemType = {
  id: number
  imageUrl: string
  name: string
  types: Array<number>
  sizes: Array<number>
  price: Array<number>
  category: number | null
  rating: number
}

export type AddPizzaToCartType = {
  id: number
  imageUrl: string
  name: string
  type: string
  size: number
  price: number
}

export interface PizzaCartItemType extends AddPizzaToCartType {
  pizzasAdded: number
  pizzasTotalPrice: number
}

export type DecreasePizzasType = {
  id: number
  size: number
  type: string // was number
}

export type CommonThunkCreatorType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>
