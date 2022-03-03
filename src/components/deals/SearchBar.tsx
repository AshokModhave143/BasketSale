import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import debounce from 'lodash.debounce'

export type SearchBarProps = {
  searchDeals: (searchTerm: string) => void
}
export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const [search, setSearch] = useState('')

  const debounceSearchDeals = debounce(props.searchDeals, 300)

  const handleChange = (searchTerm: string) => {
    setSearch(searchTerm)
    debounceSearchDeals(searchTerm)
  }

  return (
    <TextInput placeholder="Search deals..." style={styles.input} onChangeText={handleChange} />
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
