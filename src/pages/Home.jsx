import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import SortPopup from "../components/SortPopup";



const Home = ({items}) => {
    return  <div className="container">
    <div className="content__top">
      <Categories 
      items={['Мясные','Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} 
      onClickItem={(category)=> alert(category) }/>
      <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
      
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {items && items.map(i => <PizzaBlock 
      key={i.id} {...i} />)}
    </div>
  </div>     
}
export default Home