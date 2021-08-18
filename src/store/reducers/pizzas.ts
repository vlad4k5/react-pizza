import { InferActionTypes } from '../store';
import { PizzaItemType, SortByType, CommonThunkCreatorType } from '../types/types';
import axios from "axios";

const SET_PIZZAS = "pizzas/SET_PIZZAS";
const SET_LOADING = "pizzas/SET_LOADING";

const initialState = {
    items: [] as Array<PizzaItemType>,
    isLoaded: false
}

const pizzas = (state = initialState, action: ActionsType): InitialPizzasStateType => {
    switch(action.type){
        case SET_PIZZAS: return {...state, items: action.payload as Array<PizzaItemType>, isLoaded: true}
        case SET_LOADING: return {...state, isLoaded: action.payload as boolean}
        default : return state
    }
}


export const pizzasActions = {
    setPizzas: (payload: Array<PizzaItemType>) => ({type: SET_PIZZAS, payload }  as const),
    setLoading: (payload: boolean) => ({type: SET_LOADING, payload }  as const)
}

export const fetchPizzas = (sortBy: SortByType, category: number | null): ThunkType => async dispatch => {
    dispatch(pizzasActions.setLoading(false))

    const res = await axios.get(`https://my-json-server.typicode.com/vlad4k5/react-pizza/pizzas?${category !== null ? `category=${category}`: ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)

    dispatch(pizzasActions.setPizzas(res.data))
}

export default pizzas;

export type InitialPizzasStateType = typeof initialState
type ActionsType = InferActionTypes<typeof pizzasActions>
type ThunkType = CommonThunkCreatorType<ActionsType>