/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { styles } from './App.styles'
import { Deals } from './components/deals'

const App = () => {
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
