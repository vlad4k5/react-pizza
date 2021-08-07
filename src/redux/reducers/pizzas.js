import axios from "axios";


const SET_PIZZAS = "pizzas/SET_PIZZAS";
const SET_LOADING = "pizzas/SET_LOADING";


const initialState = {
    items: [],
    isLoaded: false
}

const pizzas = (state = initialState, action) => {
    switch(action.type){
        case SET_PIZZAS: return {...state, items: action.payload, isLoaded: true}
        case SET_LOADING: return {...state, isLoaded: action.payload}
        default : return state
    }
}


export const setPizzas = (payload) => ({type: SET_PIZZAS, payload })
export const setLoading = (payload) => ({type: SET_LOADING, payload })



export const fetchPizzas = (sortBy, category) => dispatch => {
    dispatch(setLoading(false))
    axios.get(`/pizzas?${category !== null ? `category=${category}`: ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(res => {
      dispatch(setPizzas(res.data))
    })
}




export default pizzas;