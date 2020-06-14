import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  
  group: {
    alignItems: "center",
    justifyContent: "center",
  },

  groupText: {
    color: "#f5f5f5",
    fontFamily: "OpenSans_600SemiBold"
  },
})