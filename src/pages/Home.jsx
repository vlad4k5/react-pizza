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


  // const obj = {
  //   id: 7,
  //   imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
  //   name: "Пепперони Фреш с перцем",
  //   types: [0,1],
  //   sizes: [26,30,40],
  //   price: 803,
  //   category: 0,
  //   rating: 4}


    // // console.log(cartItems[0].id)
    // if (cartItems.length > 0){
    //   const result = cartItems.filter(item => item.id === obj.id).reduce((sum, i) => i.pizzasAdded + sum, 0)
    //   console.log(result)
    //   // console.log([{a: 5},{a: 6}].reduce((i, sum) =>  i + sum.a, 0))
    // }
    









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
        cartItems={cartItems}
        onClickAddPizza={handleAddPizzaToCart}
        addedCount={ cartItems.filter(item => item.id === i.id).reduce((sum, i) => i.pizzasAdded + sum, 0) }
        key={i.id} 
        {...i} />) 
      : [...Array(12)].map( (i, index) =><FakePizzaBlock key={index}/>)}
    </div>
  </div>     
}




export default Home