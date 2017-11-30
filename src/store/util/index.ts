export const createReducer = (initialState: any, reducerMap: any) => {
  return (state = initialState, action: any) => {
    const reducer = reducerMap[action.type]
    if (reducer && action.content) return reducer(state, action.content)
    return reducer ? reducer(state, action.payload.data, action.params) : state
  }
}

export const isPromise = (value: any): any => {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function'
  }
}