import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

const history: any = createHistory() // TODO
const middleware = routerMiddleware(history)
const middlewares: any = [thunk, middleware] // TODO

const store = createStore(
  combineReducers({routing: routerReducer, ...rootReducer}),
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
