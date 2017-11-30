import types from '../../types'
/**
 * Created by olei on 2017/12/30.
 */
const type = types as any
export const homeAction = (value: string) => ({
  type: type.GET_SITE_DATA,
  cls: value
})