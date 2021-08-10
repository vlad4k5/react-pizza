const SET_SORT_BY = "filters/SET_SORT_BY";
const SET_CATEGORY = "filters/SET_CATEGORY";

const initialState = {
    category: null,
    sortBy: {
      type: 'rating',
      order: 'desc',
    },
  };

const filters = (state = initialState, action) => {
    switch(action.type){
        case SET_SORT_BY: return {...state, sortBy: action.payload}
        case SET_CATEGORY: return {...state, category : action.payload}
        default : return state
    }
}

export const setSortBy = (payload) => ({type: SET_SORT_BY, payload })
export const setCategory = (catIndex) => ({type: SET_CATEGORY, payload: catIndex})

export default filters;