import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'
import { useDispatch, useSelector } from 'react-redux'
import { filterActions } from '../store/reducers/filters'
import React, { useEffect, useCallback } from 'react'
import { fetchPizzas } from '../store/reducers/pizzas'
import FakePizzaBlock from '../components/FakePizzaBlock'

import { cartActions } from '../store/reducers/cart'
import { RootState } from '../store/store'
import { AddPizzaToCartType, SortByType } from '../store/types/types'

const categoryNames = ['Мясні', 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті']
const sortItems = [
  { name: 'популярністю', type: 'rating', order: 'desc' },
  { name: 'ціною', type: 'price', order: 'asc' },
  { name: 'алфавіту', type: 'name', order: 'asc' },
]

export type SortItemsType = {
  name: string
  type: string
  order: string
}

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }: RootState) => pizzas.items)
  const cartItems = useSelector(({ cart }: RootState) => cart.items)
  const isLoaded = useSelector(({ pizzas }: RootState) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }: RootState) => filters)

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [dispatch, sortBy, category])

  const onSelectCategory = useCallback(
    catIndex => {
      dispatch(filterActions.setCategory(catIndex))
    },
    [dispatch]
  )

  const onSelectSortType = useCallback(
    (type: SortByType) => {
      dispatch(filterActions.setSortBy(type))
    },
    [dispatch]
  )

  const handleAddPizzaToCart = (obj: AddPizzaToCartType) => {
    dispatch(cartActions.addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          items={categoryNames}
          onClickCategory={(category: number | null) => onSelectCategory(category)}
        />
        <SortPopup
          onClickSortType={(type: SortByType) => onSelectSortType(type)}
          items={sortItems}
          activeSortType={sortBy.type}
        />
      </div>

      <h2 className="content__title">{category === null ? 'Всі' : categoryNames[category]} піци</h2>
      <div className="content__items">
        {isLoaded
          ? items.map(i => (
              <PizzaBlock
                cartItems={cartItems}
                onClickAddPizza={handleAddPizzaToCart}
                addedCount={cartItems
                  .filter(item => item.id === i.id)
                  .reduce((sum, i) => i.pizzasAdded + sum, 0)}
                key={i.id}
                {...i}
              />
            ))
          : [...Array(12)].map((i, index) => <FakePizzaBlock key={index} />)}
      </div>
    </div>
  )
}
export default Home
