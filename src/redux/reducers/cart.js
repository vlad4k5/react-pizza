

const SET_TOTAL_PRICE = "cart/SET_TOTAL_PRICE";
const SET_TOTAL_COUNT = "cart/SET_TOTAL_COUNT";
const ADD_PIZZA_TO_CART = "cart/ADD_PIZZA_TO_CART";
const DECREASE_PIZZAS_COUNT = "cart/DECREASE_PIZZAS_COUNT";
const DELETE_PIZZA_FROM_CART = "cart/DELETE_PIZZA_FROM_CART";
const CLEAR_CART = "cart/CLEAR_CART";


const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch(action.type){
        case SET_TOTAL_PRICE: return {...state, totalPrice: action.payload}
        case SET_TOTAL_COUNT: return {...state, totalCount: action.payload}


        case ADD_PIZZA_TO_CART: 
        const isPizzaAdded = state.items.find(i => i.id === action.payload.id && i.size === action.payload.size && i.type === action.payload.type)
        if (isPizzaAdded === undefined){
            return {...state, 
                items: [...state.items, {...action.payload, pizzasAdded: 1, pizzasTotalPrice: action.payload.price}],
                totalPrice: state.totalPrice + action.payload.price,
                totalCount: state.totalCount + 1}
        } else {
            const pizzaIndex = state.items.indexOf(isPizzaAdded)
            const obj = {...state}
            obj.items = [...state.items] // without this count of added pizzas is not rerendering
            obj.items[pizzaIndex].pizzasAdded += 1
            obj.items[pizzaIndex].pizzasTotalPrice += action.payload.price
            obj.totalCount += 1
            obj.totalPrice += obj.items[pizzaIndex].price
            return obj
        }


        case DELETE_PIZZA_FROM_CART: 
        const filteredItems = state.items.filter(i => i.id !== action.payload.id || i.size !== action.payload.size || i.type !== action.payload.type)
        return {...state, items: filteredItems}


        case DECREASE_PIZZAS_COUNT: 
        const pizza = state.items.find(i => i.id === action.payload.id && i.size === action.payload.size && i.type === action.payload.type)
        if (pizza.pizzasAdded > 1){
            const pizzaIndex = state.items.indexOf(pizza)
            const obj = {...state}
            obj.items[pizzaIndex].pizzasAdded -=1
            obj.items[pizzaIndex].pizzasTotalPrice -= obj.items[pizzaIndex].price
            obj.totalCount -= 1
            obj.totalPrice -= obj.items[pizzaIndex].price
            return obj
        }else {
            return state
        }
        case CLEAR_CART: return{...state, items: [], totalCount: 0, totalPrice: 0 }
        default : return state
    }
}


export const setTotalPrice = (payload) => ({type: SET_TOTAL_PRICE, payload })
export const setTotalCount = (payload) => ({type: SET_TOTAL_COUNT, payload })
export const addPizzaToCart = (payload) => ({type: ADD_PIZZA_TO_CART, payload })
export const decreasePizzasCount = (payload) => ({type: DECREASE_PIZZAS_COUNT, payload })
export const deletePizzaFromCart = (payload) => ({type: DELETE_PIZZA_FROM_CART, payload })
export const clearCart = () => ({type: CLEAR_CART,  })



export default cart;