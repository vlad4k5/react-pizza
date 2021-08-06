import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import thunk from 'redux-thunk'
import cart from "./reducers/cart";


const rootReducer = combineReducers({filters, pizzas, cart})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  // for using redux devtools





const store = createStore(
    rootReducer, 
    composeEnhancers( applyMiddleware(thunk))
    );

export default store