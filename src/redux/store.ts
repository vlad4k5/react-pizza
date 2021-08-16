import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import thunk from 'redux-thunk'
import cart from "./reducers/cart";


const rootReducer = combineReducers({filters, pizzas, cart})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  // need for using redux DevTools

type RootReducerType = typeof rootReducer



export type AppStateType = ReturnType<RootReducerType>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never



const store = createStore(
    rootReducer, composeEnhancers( applyMiddleware(thunk))
);

export default store