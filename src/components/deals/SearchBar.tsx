import React, { useState } from 'react'
import { Keyboard, StyleSheet, TextInput } from 'react-native'
import debounce from 'lodash.debounce'

export type SearchBarProps = {
  searchDeals: (searchTerm: string) => void
  initialSearchTerm: string
}
export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(props.initialSearchTerm)

  const searchDeals = (searchTerm: string) => {
    props.searchDeals(searchTerm)
    // Keyboard.dismiss()
  }

  const debounceSearchDeals = debounce(searchDeals, 3000)
  const handleChange = (searchTerm: string) => {
    setSearchTerm(searchTerm)
    debounceSearchDeals(searchTerm)
  }

  return (
    <TextInput
      placeholder="Search deals..."
      style={styles.input}
      onChangeText={handleChange}
      value={searchTerm}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#edf6fe',
    marginHorizontal: 10,
  },
})
