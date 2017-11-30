import types from '../../types'
import InitState from './homeInitState'
/**
 * Created by olei on 2017/12/29.
 */
const type = types as any
export default (state: object = new InitState, action: any) => {
  switch (action.type) {
    case type.GET_SITE_DATA:
      return {
        ...state,
        name: action.cls
      }
    default:
      return state
  }
}
