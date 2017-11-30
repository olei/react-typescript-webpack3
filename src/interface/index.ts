export interface Ihome {
  name: string
  siteInfo: string
}

export interface IhomeAction {
  homeAction?: (n: string) => void
  home?: {
    name: string
    siteInfo: string
  }
}