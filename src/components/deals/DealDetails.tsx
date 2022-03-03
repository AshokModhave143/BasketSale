import React, { useEffect, useState } from 'react'
import { View, Image, Text, Button, Alert, TouchableOpacity } from 'react-native'
import { ApiService } from '../../api'
import { DealType, FullDealType } from '../../entities/Deal'
import { priceDisplay } from '../../utils/currency'
import { styles } from './Deal.styles'

export type DealDetailsProps = {
  initialDealData: DealType
  onReturnPress: () => void
}
export const DealDetails: React.FC<DealDetailsProps> = (props: DealDetailsProps) => {
  const { initialDealData } = props
  const [deal, setFullDeal] = useState<FullDealType>(initialDealData as FullDealType)

  useEffect(() => {
    ApiService.fetchDealDetail(props.initialDealData.key).then(details => {
      setFullDeal(details)
    })
  }, [])
  if (!deal) {
    return (
      <View>
        <Text>Invalid deal</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={props.onReturnPress}>
        <Text style={styles.backBtnText}>{`<<  Back`}</Text>
      </TouchableOpacity>
      <View style={styles.dealDetailsContainer}>
        <Image source={{ uri: initialDealData.media[0] }} style={styles.image} />
        <Text style={styles.dealTitle}>{initialDealData.title}</Text>
        <View style={styles.dealSubtitle}>
          <View style={styles.subtitleDetails}>
            <Text style={[styles.subTitleText, styles.price]}>
              {priceDisplay(initialDealData.price)}
            </Text>
            <Text style={styles.subTitleText}>{initialDealData.cause.name}</Text>
          </View>
          {deal.user && (
            <View>
              <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
              <Text style={styles.userName}>{deal.user.name}</Text>
            </View>
          )}
        </View>
        <Text style={styles.description}>{deal.description}</Text>
      </View>
    </View>
  )
}
