export interface Ihome {
  name?: string
  siteInfo?: string
  data?: any
}

export interface IhomeAction {
  homeAction?: (n: string) => void
  getData?: () => void
  home?: Ihome
}