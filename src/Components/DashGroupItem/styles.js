import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  dashGroup: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: "space-around", 
    marginTop: 16,
  },

  dashGroupItems: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },

  itemTitle: {
    color: '#EEEEEE',
    fontFamily: "OpenSans_700Bold",
    fontSize: 24,
  },

  itemDescription: {
    color: '#EEEEEE',
    fontSize: 14,
    fontFamily: "OpenSans_600SemiBold",
    marginTop: 8,
    width: 100,
    textAlign: "center"
  },

  lineGradient: {
    width: 300, 
    marginTop: 15, 
    borderRadius: 8 
  }
})