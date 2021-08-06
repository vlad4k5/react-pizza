import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import SortPopup from "../components/SortPopup";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../redux/reducers/filters";
import { useEffect } from "react";
import { fetchPizzas } from "../redux/reducers/pizzas";
import FakePizzaBlock from "../components/FakePizzaBlock";
import { useCallback } from "react";
import { addPizzaToCart } from "../redux/reducers/cart";



const categoryNames = ['Мясные','Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'asc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

const Home = () => {

  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {category, sortBy} = useSelector(({filters}) => filters)


  useEffect(() => {
      dispatch(fetchPizzas(sortBy, category))
  }, [dispatch, sortBy, category]) // put dispatch into dependency cuz of warning "React Hook useEffect has a missing dependency: 'dispatch'"

  const onSelectCategory = useCallback((catIndex) => {
    dispatch(setCategory(catIndex))
  },[dispatch])


  const onSelectSortType = useCallback((type) => {
    
    dispatch(setSortBy(type))
  }, [dispatch])


  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

    return  <div className="container">
    <div className="content__top">
      <Categories 
      activeCategory={category}
      items={categoryNames} 
      onClickCategory={(category) => onSelectCategory(category) }/>
      <SortPopup
        onClickSortType={(type) => onSelectSortType(type)}
        items={sortItems}
        activeSortType={sortBy.type}
      />
      
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {isLoaded 
      ? items.map(i => <PizzaBlock 
        onClickAddPizza={handleAddPizzaToCart}
        addedCount={cartItems[i.id]? cartItems[i.id].length: 0}
        key={i.id} 
        {...i} />) 
      : [...Array(12)].map( (i, index) =><FakePizzaBlock key={index}/>)}
    </div>
  </div>     
}




export default Home