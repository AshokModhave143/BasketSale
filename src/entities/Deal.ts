type CauseType = {
  name: string
}
type CharityType = {
  name: string
  description: string
  website: string
}
type UserType = {
  avatar: string
  name: string
}

export type DealType = {
  key: string
  title: string
  price: number
  cause: CauseType
  media: Array<string>
}
export type FullDealType = {
  dealType: string
  makerPercentage: number
  description: string
  tags: string
  charity: Array<CharityType>
  charityName: string
  charityDescription: string
  charityWebsite: string
  availableQuantity: number
  geoLocation: string
  url: string
  user: UserType
} & DealType
