import React, { useEffect, useState } from 'react'
import {
  View,
  Image,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  PanResponder,
  Animated,
  Dimensions,
  Linking,
} from 'react-native'
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
  const [imageIndex, setImageIndex] = useState(0)
  const imageXPos = new Animated.Value(0)

  const { width } = Dimensions.get('window')

  const imageResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gs) => {
      imageXPos.setValue(gs.dx)
    },

    onPanResponderRelease: (evt, gs) => {
      if (Math.abs(gs.dx) > width * 0.4) {
        const direction = Math.sign(gs.dx)
        // -1 = left, +1 = right
        Animated.timing(imageXPos, {
          toValue: direction * width,
          duration: 250,
          useNativeDriver: false,
        }).start(() => handleImageSwipe(-1 * direction))
      } else {
        imageXPos.setValue(0)
      }
    },
  })
  useEffect(() => {
    imageXPos.setValue(width)

    Animated.spring(imageXPos, {
      toValue: 0,
      useNativeDriver: false,
    }).start()
  }, [imageIndex])

  const handleImageSwipe = (indexDirection: number) => {
    if (!deal.media[imageIndex + indexDirection]) {
      Animated.spring(imageXPos, {
        toValue: 0,
        useNativeDriver: false,
      }).start()
      return
    }
    setImageIndex(prev => prev + indexDirection)
  }

  useEffect(() => {
    ApiService.fetchDealDetail(props.initialDealData.key).then(details => {
      setFullDeal(details)
    })
  }, [])

  const openDealUrl = () => {
    Linking.openURL(deal.url)
  }

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
        <Animated.Image
          source={{ uri: initialDealData.media[imageIndex] }}
          style={[{ left: imageXPos }, styles.image]}
          {...imageResponder.panHandlers}
        />
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
        <View style={styles.buyBtn}>
          <Button title="Buy this deal" onPress={openDealUrl} color="orange" />
        </View>
      </View>
    </View>
  )
}
