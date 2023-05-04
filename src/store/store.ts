import { applyMiddleware, combineReducers, createStore } from 'redux'
import filters from './reducers/filters'
import pizzas from './reducers/pizzas'
import thunk from 'redux-thunk'
import cart from './reducers/cart'

const rootReducer = combineReducers({ filters, pizzas, cart })

export type RootReducerType = typeof rootReducer
export type RootState = ReturnType<typeof store.getState>

export type AppStateType = ReturnType<RootReducerType>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
  ? U
  : never

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
