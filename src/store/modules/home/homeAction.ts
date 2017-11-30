import axios from 'axios'
import types from '../../types'
import { Ihome } from '../../../interface'
/**
 * Created by olei on 2017/12/30.
 */
const type = types as any
export const homeAction = (str: string): any => ({
  type: type.GET_SITE_DATA,
  content: str
})

export const getData = () => ({
  type: type.GET_LOGIN_ITEMS,
  payload: {
    promise: axios.get(`/activity/activity/`)
  }
})