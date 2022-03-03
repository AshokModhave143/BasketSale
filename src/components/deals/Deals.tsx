import React, { useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { ApiService } from '../../api'
import { DealType } from '../../entities/Deal'
import { styles } from './Deal.styles'
import { DealDetails } from './DealDetails'
import { DealList } from './DealList'

export type DealsProps = {
  //   deals: Array<Deal>
}

export const Deals: React.FC<DealsProps> = (props: DealsProps) => {
  const [deals, setDeals] = useState<Array<DealType>>([])
  const [currentDealId, setCurrentDealId] = useState('')

  useEffect(() => {
    ApiService.fetchInitialDeals().then(deals => {
      setDeals(deals)
    })
  }, [])

  const setCurrentDeal = (dealId: string) => {
    setCurrentDealId(dealId)
  }

  const currentDeal = (key: string) => {
    return deals.find(d => d.key === key) || ({} as DealType)
  }
  const onReturn = () => setCurrentDealId('')

  if (currentDealId.length != 0) {
    return (
      <DealDetails initialDealData={currentDeal(currentDealId)} onReturnPress={() => onReturn()} />
    )
  }

  return (
    <View style={styles.dealContainer}>
      <Text style={styles.title}>Deals</Text>

      {deals.length === 0 ? (
        <Text style={styles.noDeals}>No deals available</Text>
      ) : (
        <DealList deals={deals} onItemPress={setCurrentDeal} />
      )}
    </View>
  )
}
