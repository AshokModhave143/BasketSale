import React, { useEffect, useState } from 'react'
import { Alert, Animated, Dimensions, Easing, Text, View } from 'react-native'
import { ApiService } from '../../api'
import { DealType } from '../../entities/Deal'
import { styles } from './Deal.styles'
import { DealDetails } from './DealDetails'
import { DealList } from './DealList'
import { SearchBar } from './SearchBar'

export type DealsProps = {
  //   deals: Array<Deal>
}

export const Deals: React.FC<DealsProps> = (props: DealsProps) => {
  const [deals, setDeals] = useState<Array<DealType>>([])
  const [dealsFromSearch, setDealsFromSearch] = useState([])
  const [currentDealId, setCurrentDealId] = useState('')
  const [activeSearchTerm, setActiveSearchTerm] = useState('')

  const [titleXPos, setTitleXPos] = useState(new Animated.Value(0))

  const animateLoading = (direction = 1) => {
    const { width } = Dimensions.get('window')

    Animated.timing(titleXPos, {
      toValue: direction * (width / 2 - 60),
      useNativeDriver: false,
      duration: 1000,
      easing: Easing.linear,
    }).start(({ finished }) => {
      if (finished) {
        animateLoading(-1 * direction)
      }
    })
  }
  useEffect(() => {
    animateLoading()
  }, [])

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

  const searchDeals = async (searchTerm: string) => {
    let searchedDeals = []
    if (searchTerm) {
      searchedDeals = await ApiService.fetchDealsSearchResults(searchTerm)
    }
    setDealsFromSearch(searchedDeals)
    setActiveSearchTerm(searchTerm)
  }

  if (currentDealId.length != 0) {
    return (
      <DealDetails initialDealData={currentDeal(currentDealId)} onReturnPress={() => onReturn()} />
    )
  }

  const dealsToDisplay = dealsFromSearch.length > 0 ? dealsFromSearch : deals
  return (
    <View style={styles.dealContainer}>
      <Text style={styles.title}>Deals</Text>

      {dealsToDisplay.length === 0 ? (
        <Animated.View style={[styles.dealContainer, { left: titleXPos }]}>
          <Text style={styles.noDeals}>No deals available</Text>
        </Animated.View>
      ) : (
        <View style={styles.main}>
          <SearchBar searchDeals={searchDeals} initialSearchTerm={activeSearchTerm} />
          <DealList deals={dealsToDisplay} onItemPress={setCurrentDeal} />
        </View>
      )}
    </View>
  )
}
