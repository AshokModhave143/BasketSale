import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { DealType } from '../../entities/Deal'
import { DealItem } from './DealItem'

export type DealListProps = {
  deals: Array<DealType>
  onItemPress: (dealId: string) => void
}
export const DealList = (props: DealListProps) => {
  return (
    <View>
      <FlatList
        data={props.deals}
        renderItem={({ item }) => <DealItem deal={item} onPress={props.onItemPress} />}
        nestedScrollEnabled={true}
      />
    </View>
  )
}
