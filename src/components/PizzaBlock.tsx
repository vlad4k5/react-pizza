import React, { FC, useState } from 'react'
import classnames from 'classnames'
import Button from './Button'
import { AddPizzaToCartType, PizzaCartItemType } from '../store/types/types'

type PizzaBlockPropsType = {
  id: number
  imageUrl: string
  name: string
  price: Array<number>
  types: Array<number>
  sizes: Array<number>
  onClickAddPizza: (obj: AddPizzaToCartType) => void
  addedCount: number
  cartItems: Array<PizzaCartItemType>
}

const PizzaBlock: FC<PizzaBlockPropsType> = ({
  id,
  imageUrl,
  name,
  price,
  types,
  sizes,
  onClickAddPizza,
  addedCount,
  cartItems,
}) => {
  const availableTypes = ['тонке', 'традиційне']
  const availableSizes = [25, 30, 35]
  const [activeType, setActiveType] = useState(types[0])
  const [activeSize, setActiveSize] = useState(sizes[0])
  const [activePrice, setActivePrice] = useState(price[0])

  const currentPizzasAdded = cartItems
    .filter(
      item => item.id === id && item.size === activeSize && item.type === availableTypes[activeType]
    )
    .reduce((sum, i) => i.pizzasAdded + sum, 0)

  const onSelectType = (index: number) => {
    setActiveType(index)
  }

  const onSelectSize = (size: number, index: number) => {
    setActiveSize(size)
    setActivePrice(price[index])
  }

  const onAddPizza = () => {
    onClickAddPizza({
      id,
      imageUrl,
      name,
      price: activePrice,
      size: activeSize,
      type: availableTypes[activeType],
    })
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              onClick={() => onSelectType(index)}
              key={`${type} ${index}`}
              className={classnames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>

        <ul>
          {availableSizes.map((size, index) => (
            <li
              onClick={() => onSelectSize(size, index)}
              key={`${size} ${index}`}
              className={classnames({
                active: activeSize === size,
                disabled: !sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>

      <div className="pizza-block__bottom">
        <div className="pizza-block__price"> {activePrice} грн.</div>
        <Button onClick={onAddPizza} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Додати</span>
          {currentPizzasAdded !== 0 && <i>{currentPizzasAdded}</i>}
        </Button>
      </div>
    </div>
  )
}

export default React.memo(PizzaBlock)
