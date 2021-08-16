import { SortByType } from './../types/types';
import { InferActionTypes } from './../store';
const SET_SORT_BY = "filters/SET_SORT_BY";
const SET_CATEGORY = "filters/SET_CATEGORY";



const initialState = {
    category: null as number | null,
    sortBy: {
      type: 'rating',
      order: 'desc',
    } as SortByType
  };

const filters = (state = initialState, action: ActionType): InitialStateType => {
    switch(action.type){
        case SET_SORT_BY: return {...state, sortBy: action.payload as SortByType}
        case SET_CATEGORY: 
        return {...state, category : action.payload as number | null}
        default : return state
    }
}

export const filterActions = {
  setSortBy: (payload : SortByType) => ({type: SET_SORT_BY, payload } as const ),
  setCategory: (catIndex: number | null) => ({type: SET_CATEGORY, payload: catIndex} as const)
}


export default filters;


type InitialStateType = typeof initialState 
type ActionType = InferActionTypes<typeof filterActions>