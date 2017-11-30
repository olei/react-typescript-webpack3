import types from '../../types'
import { createReducer } from '../../util'
import InitState from './homeInitState'
/**
 * Created by olei on 2017/12/29.
 */
const type = types as any

export default createReducer(new InitState, {
  [type.GET_SITE_DATA]: (state: any, data: any) => {
    return state.set('siteInfo', data)
  },
  [`${type.GET_LOGIN_ITEMS}_SUCCESS`]: (state: any, data: any) => {
    console.log(data)
    return state.set('data', data)
  }
})