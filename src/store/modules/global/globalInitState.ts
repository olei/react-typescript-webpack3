import { Record } from 'immutable'

interface Iglobal {
  name: string
  siteInfo: string
}

export default Record({
  name: 'react redux - jzb fe framework',
  siteInfo: 'demo'
} as Iglobal)
