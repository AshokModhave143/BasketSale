import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  // Deals
  dealContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  main: {
    width: '100%',
  },
  title: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
  },
  noDeals: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'italic',
    justifyContent: 'center',
  },
  // DealsItem
  dealItemContainer: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'darkgrey',
    backgroundColor: '#f5f5f5',
  },
  image: {
    height: 150,
    width: '100%',
    backgroundColor: 'gray',
  },
  dealTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'orange',
  },
  dealSubtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  subTitleText: {
    fontWeight: '500',
    fontSize: 14,
  },

  // Deal details
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  dealDetailsContainer: {
    marginVertical: 8,
  },
  subtitleDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  price: {
    fontWeight: 'bold',
    color: 'black',
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  userName: {
    fontSize: 12,
    fontWeight: '400',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#000000',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  backBtn: {
    marginHorizontal: 10,
    width: 80,
  },
  backBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationStyle: 'solid',
    color: 'blue',
    textDecorationLine: 'underline',
  },
})
