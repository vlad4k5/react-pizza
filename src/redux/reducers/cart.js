

const SET_TOTAL_PRICE = "cart/SET_TOTAL_PRICE";
const SET_TOTAL_COUNT = "cart/SET_TOTAL_COUNT";
const ADD_PIZZA_TO_CART = "cart/ADD_PIZZA_TO_CART";


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch(action.type){
        case SET_TOTAL_PRICE: return {...state, totalPrice: action.payload}
        case SET_TOTAL_COUNT: return {...state, totalCount: action.payload}
        case ADD_PIZZA_TO_CART: return {...state, 
            items: {...state.items, 
                [action.payload.id]: !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload]},
            totalPrice: state.totalPrice + action.payload.price,
            totalCount: state.totalCount + 1}
        default : return state
    }
}


export const setTotalPrice = (payload) => ({type: SET_TOTAL_PRICE, payload })
export const setTotalCount = (payload) => ({type: SET_TOTAL_COUNT, payload })
export const addPizzaToCart = (payload) => ({type: ADD_PIZZA_TO_CART, payload })



// export const fetchPizzas = (sortBy, category) => dispatch => {
//     dispatch(setLoading(false))
//     axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}`: ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
//     .then(res => {
//       dispatch(setPizzas(res.data))
//     })
// }




export default cart;