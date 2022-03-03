import fetch from 'node-fetch'
const apiURL = 'https://bakesaleforgood.com'

export const ApiService = {
  async fetchInitialDeals() {
    try {
      const response = await fetch(apiURL + '/api/deals')
      const responseJson = await response.json()
      return responseJson
    } catch (err) {
      console.error(err)
    }
  },
  async fetchDealDetail(dealId: string) {
    try {
      const response = await fetch(apiURL + '/api/deals/' + dealId)
      const responseJson = await response.json()
      return responseJson
    } catch (err) {
      console.error(err)
    }
  },
}
