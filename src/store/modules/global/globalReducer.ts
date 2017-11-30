import types from '../../types'
import InitState from './globalInitState'

/**
 * Created by olei on 2017/12/29.
 */

export default (state: object = InitState, action: any) => {
  switch (action.type) {
    case "GET_SITE_DATA":
      return {
        ...state,
        name: action.cls
      }
    default:
        return state
  }
}
