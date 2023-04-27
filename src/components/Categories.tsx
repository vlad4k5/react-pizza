import React, { FC } from 'react'

type CategoryPropsType = {
  activeCategory: null | number
  items: Array<string>
  onClickCategory: (category: null | number) => void
}

const Categories: FC<CategoryPropsType> = ({ activeCategory, items, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
          Всі
        </li>

        {items &&
          items.map((category, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${category} ${index}`}
            >
              {category}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default React.memo(Categories)
