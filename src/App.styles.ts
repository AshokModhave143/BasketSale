import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555555',
  },
  brand: {
    fontSize: 24,
    fontWeight: 'bold',
    shadowRadius: 25,
    shadowColor: 'yellow',
    elevation: 10,
    color: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginVertical: 20,
  },
})
