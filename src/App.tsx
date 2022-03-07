/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { styles } from './App.styles'
import { Deals } from './components/deals'
import RNBootSplash from 'react-native-bootsplash'

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    }

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true })
      console.log('Bootsplash has been hidden successfully')
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic" nestedScrollEnabled={true}> */}

      <View style={styles.header}>
        <Text style={styles.brand}>BakeSale</Text>
      </View>
      <View style={styles.content}>
        <Deals />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default App
