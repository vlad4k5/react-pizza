import React from "react"

const Categories = React.memo(({activeCategory, items, onClickCategory}) => {
  return <div className="categories">
  <ul>
    <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>

    {items && items.map((category, index) => <li 
    className={activeCategory === index ? 'active' : ''} 
    onClick={()=> onClickCategory(index)}
    key={`${category} ${index}`}>{category}</li>)}
  </ul>
</div>
})

export default Categories