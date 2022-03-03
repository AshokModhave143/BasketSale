import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { DealType } from '../../entities/Deal'
import { priceDisplay } from '../../utils/currency'
import { styles } from './Deal.styles'

export type DealItemProps = {
  deal: DealType
  onPress: (dealId: string) => void
}
export const DealItem: React.FC<DealItemProps> = (props: DealItemProps) => {
  const { deal } = props
  const handlePress = () => props.onPress(deal.key)

  return (
    <TouchableOpacity style={styles.dealItemContainer} onPress={handlePress}>
      <Image source={{ uri: deal.media[0] }} style={styles.image} />
      <Text style={styles.dealTitle}>{deal.title}</Text>
      <View style={styles.dealSubtitle}>
        <Text style={styles.subTitleText}>{deal.cause.name}</Text>
        <Text style={styles.subTitleText}>{priceDisplay(deal.price)}</Text>
      </View>
    </TouchableOpacity>
  )
}
